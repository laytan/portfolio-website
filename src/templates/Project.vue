<template>
  <Layout>
    <navigation></navigation>
    <project
      :title="$page.project.title"
      :languages="$page.project.languages"
    >
      <div v-html="$page.project.content">
    </div>
    </project>
  </Layout>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Project from '../components/Project.vue';

export default {
  metaInfo () {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  },
  components: {
    Navigation,
    Project,
  },
}
</script>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    title
    languages
    description
    content
  }
}
</page-query>
