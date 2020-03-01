<template>
  <Layout>
    <navigation></navigation>
    <project
      :title="$page.repo.name"
      :languages="$page.repo.all_languages"
    >
      <dynamic-g-image v-for="img in $page.repo.images" :key="img" :img="`github/${img}`"></dynamic-g-image>
    </project>
  </Layout>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Project from '../components/Project.vue';
import DynamicGImage from '../components/DynamicGImage.vue';

export default {
  components: {
    Navigation,
    Project,
    DynamicGImage,
  },
  methods: {
    assetPath (path, alt, width) {
      return require(`!!assets-loader?alt=${alt}&width=${width}!${path}`); 
    },
  },
  // metaInfo: () => ({
  //   title: this.$page.repo.name,
  //   meta: [
  //     {
  //       name: 'description',
  //       content: this.$page.repo.description
  //     }
  //   ]
  // }),
}
</script>

<page-query>
query Repo ($id: ID!) {
  repo: repo (id: $id) {
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
</page-query>
