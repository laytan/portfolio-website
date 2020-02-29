<template>
  <Layout>
    <header-home></header-home>
    <github-projects></github-projects>
  </Layout>
</template>

<script>
import GithubProjects from '../components/GithubProjects';
import HeaderHome from '../components/HeaderHome';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    // GithubProjects,
    HeaderHome,
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
