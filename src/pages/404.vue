<template>
  <Layout>
    <navigation></navigation>
    <div class="four04">
      <h1>404 - Not Found</h1>
    </div>
  </Layout>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  metaInfo: {
    title: '404 Not Found',
  },
  components: {
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
  .four04 {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
