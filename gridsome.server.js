// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const HTMLParser = require('node-html-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const request = require('request');
require('dotenv').config();

const REPO_URL = 'https://api.github.com/users/laytan/repos';

const auth = 'laytan:' + process.env.PERSONAL_ACCESS_TOKEN;
const buff = new Buffer(auth);
const base64 = buff.toString('base64');
const headers = {
  Authorization: 'Basic ' + base64,
};

async function parseGithubPage(url) {
  return await fetch(url).then(res => res.text()).then(async (html) => {
    const root = HTMLParser.parse(html);
    const readme_html = root.querySelector('.markdown-body');
    if(!readme_html) {
      return;
    }

    // Get all image urls and turn relative urls into full urls
    const imageEls = readme_html.querySelectorAll('img');
    const image_urls = imageEls.map(el => {
      const src = el.getAttribute('src');
      if(src.includes('https://')) {
        return src;
      }
      return `https://github.com${el.getAttribute('src')}`;
    });

    // Download all images locally
    const images = await Promise.all(image_urls.map(async (url) => {
      try {
        const fileName = url.substring(url.lastIndexOf('/') + 1);

        const dest = `./src/images/github/${fileName}`;
        if(fs.existsSync(dest)) {
          return fileName;
        }
        console.log(`downloading image: ${fileName}`);
        request(url).pipe(fs.createWriteStream(dest)).on('close', () => {
          return fileName;
        });
      } catch(e) {
        console.error(e);
      }
    }));
    return { readme: readme_html.innerHTML || '', images: images || [] };
  });
}

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const data = await fetch(REPO_URL, { headers }).then(res => res.json()).catch(console.error);
    if(!Array.isArray(data)) {
      console.error(data);
      return;
    }

    const collection = addCollection({
      typeName: 'Repo',
    });

    for(const repo of data) {
      // Don't add forks
      if(repo.fork) {
        continue;
      }

      // Parse readme and images
      const parsed = await parseGithubPage(repo.html_url);

      const node = {
        ...repo,
        ...parsed,
        all_languages: await fetch(repo.languages_url, { headers }).then(res => res.json()).then(data => {
          if(data.message) {
            console.error(data.message);
            return [];
          } else {
            return Object.keys(data);
          }
        })
      }
      collection.addNode(node);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
