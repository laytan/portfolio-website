<template>
  <Layout>
    <header-home></header-home>
  </Layout>
</template>

<script>
import GithubProjects from '../components/GithubProjects';
import HeaderHome from '../components/HeaderHome';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    GithubProjects,
    HeaderHome,
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
