<template>
  <div>
    <h1>{{ title }}</h1>
    <ul v-if="languages" class="languages">
      <li v-for="language in languages" :key="language">
        <dev-icon icon-type="plain-wordmark" :icon="language"></dev-icon>
      </li>
    </ul>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
import DevIcon from './DevIcon.vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    languages: {
      type: Array,
      required: false,
    },
  },
  components: {
    DevIcon,
  },
}
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

p {
  max-width: 65ch;
  margin: 0 auto;
}

.languages {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  align-items: center;
  background-color: $primary;
  padding: 2rem 0;

  li {
    font-size: 5rem;
  }
}
</style>
