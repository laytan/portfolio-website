<template>
  <div>
    <div v-for="(repos, language) in allByLanguage" :key="language">
      <h2><dev-icon extra-classes="text-primary colored" :icon="language"></dev-icon> {{ language }}</h2>
      <div v-for="repo in repos" :key="repo.node.name">
        <h3>{{ niceName(repo.node.name) }}</h3>
        <g-image class="repo__image" v-for="img in getReadmeImages(repo.node)" :src="img" :key="img"></g-image>
        <p>
          {{ repo.node.description }}
        </p>
        <p>
          <small>
            Made: {{ format(new Date(repo.node.created_at), 'd MMMM yyyy') }}
          </small>
          <br>
          <small>
            Updated: {{ format(new Date(repo.node.updated_at), 'd MMMM yyyy') }}
          </small>
        </p>
        <a :href="repo.node.html_url" class="btn">
          View on Github <i class="devicon-github-plain"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
	allRepo(filter: {
    fork: { eq: false },
    name: { ne: "hello-world" },
  },
    sortBy: "created_at",
    order: DESC,
  ) {
    edges {
      node {
        name,
        description,
        all_languages,
        html_url,
        created_at,
        updated_at,
        readme,
        images,
      }
    }
  }
}
</static-query>

<script>
import { format } from 'date-fns';
import { parse } from 'node-html-parser';

import DevIcon from './DevIcon.vue';

export default {
  components: {
    DevIcon,
  },
  computed: {
    languages: function() {
      const languages = new Set();
      this.$static.allRepo.edges.forEach(({ node }) => {
        node.all_languages.forEach(language => {
          languages.add(language);
        });
      });
      return languages;
    },
    allByLanguage: function() {
      // Create an object with all languages as key with an empty array
      const ret = [...this.languages].reduce((agg, curr) => {
        agg[curr] = [];
        return agg;
      }, {});

      // Add repo to the arrays of the languages it contains
      [...this.languages].forEach(language => {
        ret[language].push(...this.$static.allRepo.edges.filter(edge => edge.node.all_languages.includes(language)));
      });
      return ret;
    },
  },
  methods: {
    // Parse repo html and extract image srces out of the markdown
    getReadmeImages: function(repo) {
      const root = parse(repo.repo_html);
      return root.querySelectorAll('.markdown-body img').map(el => `https://github.com${el.getAttribute('src')}`);
    },
    niceName(name) {
      return name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
    },
    format
  },
}
</script>

<style>
.repo__image {
  max-width: 100%;
}
</style>
