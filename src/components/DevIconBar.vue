<template>
  <ul v-if="icons" class="icons">
    <li v-for="icon in icons" :key="icon">
      <dev-icon icon-type="plain-wordmark" :icon="icon"></dev-icon>
    </li>
  </ul>
</template>

<script>
import DevIcon from './DevIcon.vue';

export default {
  props: {
    icons: {
      type: Array,
      required: true,
    },
  },
  components: {
    DevIcon,
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
  background-color: $primary;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  li {
    font-size: 5rem;
    padding: 2rem 0;
  }
}
</style>
