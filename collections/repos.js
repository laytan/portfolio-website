const HTMLParser = require('node-html-parser');
const fetch = require('node-fetch');
const fs = require('fs');
const fsp = fs.promises;
const request = require('request');

async function getRepos(username, accessToken, excludedRepos) {
  const authenticatedHeaders = githubHeaders(username, accessToken);

  const data = await fetch(`https://api.github.com/users/${username}/repos`, authenticatedHeaders).then(res => res.json());

  // Probably rate limited
  if(!Array.isArray(data)) {
    console.error(data);
    return [];
  }

  const reposWithNull = await Promise.all(data.map(async (repo) => {
    // Check if we should add it
    if(!shouldAdd(repo, excludedRepos)) {
      return null;
    }
  
    // Get full readme html and image paths
    const { readme, images } = await parseGithubPage(repo.html_url);
  
    // Fetch languages of the repo from github api and parse them into an array of language strings
    const all_languages = await getLanguages(repo.languages_url, authenticatedHeaders);
  
    // Add a node with the repo data from the github api + our custom properties
    return {
      ...repo,
      readme,
      images,
      all_languages,
    }
  }));

  // Filter out null repos
  return reposWithNull.filter(repoOrNull => repoOrNull !== null);
}

/**
 * Setup headers to sent authenticated github requests via a personal access token
 * Mainly used to get more requests in before getting rate limited
 */
function githubHeaders(username, accessToken) {
  const authString = `${username}:${accessToken}`;
  return {
    headers: {
      Authorization: `Basic ${Buffer.from(authString).toString('base64')}`,
    }
  };
}

/**
 * Check if the repo should be added to our collection
 * @param {Object} repo The repo to check
 * @param {array} excludedRepos Names of repos to not add regardless
 */
function shouldAdd(repo, excludedRepos) {
  // Don't add forks
  if(repo.fork) {
    return false;
  }

  // Don't add excluded repos
  if(excludedRepos.includes(repo.name)) {
    return false;
  }

  return true;
}

/**
 * Fetch language endpoint and turn into array of language strings
 * @param {string} languagesUrl Languages Github API endpoint
 * @param {object} headers Headers to add to the request
 */
async function getLanguages(languagesUrl, headers) {
  const languages = await fetch(languagesUrl, headers).then(res => res.json());
  // Github API error (probably rate limit)
  if(languages.message) {
    console.error(languages.message);
    return [];
  }
  return Object.keys(languages);
}

/**
 * Parses the repos html and returns the readme part
 * @param {string} url Url of a github repo
 */
async function getReadme(url) {
  const html = await fetch(url).then(res => res.text());
  const root = HTMLParser.parse(html);
  return root.querySelector('.markdown-body');
}

/**
 * Checks if the image is already downloaded and downloads them otherwise
 * @param {array} urls Array of image urls to check for locally and download otherwise
 * @param {string} folder Folder to download into
 * @returns {array} Array of file names for the local images
 */
async function getImages(urls, folder) {
  return await Promise.all(urls.map(async (url) => {
    // Get file name out of url
    // ! If there are 2 files with the same name over 2 repos this won't work
    const fileName = url.substring(url.lastIndexOf('/') + 1);
    const downloadLocation = `./src/images/${folder}/${fileName}`;
    
    // If the file exists we have downloaded it before, no need to do it again
    try {
      // If this is succesfull the file exists
      await fsp.access(downloadLocation);
      return fileName;
    } catch(_) {
      // If it errors the file does not exist so we download it
      console.log(`downloading: ${fileName}`);
      await download(url, downloadLocation);
      return fileName;
    }
  }));
}

/**
 * Downloads the image at url into the location
 * @param {string} url Image url to download
 * @param {string} location Path to download to
 */
function download(url, location) {
  return new Promise((resolve, reject) => {
    try {
      request(url).pipe(fs.createWriteStream(location))
        .on('close', () => {
          resolve();
        }
      );
    } catch(e) {
      reject(e);
    }
  });
}

/**
 * Checks for relative url and turns it into an absolute url
 * @param {Object} imgE Img element to get src from
 */
function absoluteGithubSrc(imgEl) {
  const src = imgEl.getAttribute('src');
  // If the src is already an absolute url return the original src
  if(src.includes('https://')) {
    return src;
  }
  // Turn the relative url into a absolute github url
  return `https://github.com${imgEl.getAttribute('src')}`;
}

/**
 * Parses the github page for its readme and the images in that readme
 * @param {string} url Github repo URL
 * @returns { readme: string, images: string } Images are local filenames in /src/images/github
 */
async function parseGithubPage(url) {
  const readme = await getReadme(url);

  // Some repos don't have a readme, return empty results
  if(!readme) {
    return { readme: '', images: [] };
  }

  // All image urls in the readme
  const readmeImageURLs = readme.querySelectorAll('img').map(absoluteGithubSrc);

  // Download all the images and return their paths
  // * Downloading is done because we want to benefit from gridsome's g-image component *
  const readmeImagePaths = await getImages(readmeImageURLs, 'github');

  return { readme: readme.innerHTML, images: readmeImagePaths };
}

module.exports = getRepos;
