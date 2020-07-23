<template>
  <div>
    <h2>Github Projects</h2>
    <project-cards type="github" :cards="$static.allRepo.edges"></project-cards>
  </div>
</template>

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
    limit: 4,
  ) {
    edges {
      node {
        name,
        description,
        images,
        stargazers_count,
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
