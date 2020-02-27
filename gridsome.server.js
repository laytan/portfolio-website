// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fetch = require('node-fetch');

const REPO_URL = 'https://api.github.com/users/laytan/repos';

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const data = await fetch(REPO_URL).then(res => res.json());

    const collection = addCollection({
      typeName: 'Repos',
    });

    for(const repo of data) {
      collection.addNode({
        ...repo,
        all_languages: await fetch(repo.languages_url).then(res => res.json()).then(data => Object.keys(data)),
        repo_html: await fetch(repo.html_url).then(res => res.text()),
      });
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
