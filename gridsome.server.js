/**
 * Hook into gridsome and add our custom github repo collection
 */
require('dotenv').config();
const getRepos = require('./collections/repos');

const EXCLUDED_REPOS = ['portfolio-website'];
const GITHUB_USERNAME = 'laytan';

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {    
    // Initialize a collection to add our repos to
    const collection = addCollection({
      typeName: 'Repo',
    });

    // Fetch repos from github api
    const repos = await getRepos(GITHUB_USERNAME, process.env.PERSONAL_ACCESS_TOKEN, EXCLUDED_REPOS);
    repos.forEach(collection.addNode);
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
