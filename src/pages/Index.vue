<template>
  <Layout>
    <header-home></header-home>
    <div class="container">
      <div :style="{ marginBottom: '5rem' }"></div>
      <featured-projects></featured-projects>
      <div :style="{ marginBottom: '5rem' }"></div>
      <github-projects></github-projects>
      <div :style="{ marginBottom: '5rem' }"></div>
    </div>
  </Layout>
</template>

<script>
import GithubProjects from '../components/GithubProjects';
import HeaderHome from '../components/HeaderHome';
import FeaturedProjects from '../components/FeaturedProjects';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    GithubProjects,
    HeaderHome,
    FeaturedProjects,
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
