<template>
  <Layout>
    <navigation></navigation>
    <header class="category-header">
      <h1>Repos</h1>
      <p>
        These are all my public Github projects dynamically retrieved via the Github API.
      </p>
    </header>
    <div class="container">
      <project-cards type="github" :cards="$static.allRepo.edges"></project-cards>
    </div>
  </Layout>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import ProjectCards from '../components/ProjectCards.vue';

export default {
  metaInfo: {
    title: 'Github Projects',
  },
  components: {
    Navigation,
    ProjectCards,
  },
}
</script>

<static-query>
query {
	allRepo(filter: {
    fork: { eq: false },
    name: { ne: "hello-world" },
    disabled: { ne: true },
    archived: { ne: true },
    private: { ne: true },
  },
    sort: [ { by: "stargazers_count" }, { by: "updated_at" } ],
    order: DESC,
  ) {
    edges {
      node {
        name,
        description,
        images,
        stargazers_count
      }
    }
  }
}
</static-query>
