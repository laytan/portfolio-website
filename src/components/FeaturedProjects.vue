<template>
  <div>
    <h2>Featured Projects</h2>
    <project-cards type="manual" :cards="$static.allProject.edges"></project-cards>
  </div>
</template>

<static-query>
query {
  allProject(
    filter: {
      published: { eq: true },
    },
    limit: 4,
    sortBy: "date",
    order: DESC,
  ) {
    edges {
      node {
      	name,
        description,
        images,
        path
      }
    }
  }
}
</static-query>

<script>
import ProjectCards from './ProjectCards';

export default {
  components: {
    ProjectCards,
  },
}
</script>
