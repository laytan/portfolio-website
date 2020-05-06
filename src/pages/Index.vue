<template>
  <Layout>
    <header-home></header-home>
    <div class="container">
      <div :style="{ marginBottom: '2.5rem' }"></div>
      <github-projects></github-projects>
      <div :style="{ textAlign: 'right' }">
        <custom-button button-type="secondary" :outside="false" to="/repos" hover="text">View All Github Projects</custom-button>
      </div>
      <div :style="{ marginBottom: '5rem' }"></div>
    </div>
  </Layout>
</template>

<script>
import GithubProjects from '../components/GithubProjects';
import HeaderHome from '../components/HeaderHome';
import FeaturedProjects from '../components/FeaturedProjects';
import CustomButton from '../components/CustomButton.vue';

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    GithubProjects,
    HeaderHome,
    FeaturedProjects,
    CustomButton,
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
