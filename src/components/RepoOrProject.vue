<template>
  <div>
    <div class="container">
      <h1>
        <nice-name :name="name"></nice-name>
      </h1>
      <div class="repo-or-project block-spacing">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NiceName from './NiceName';

export default {
  components: {
    NiceName,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.repo-or-project {
  margin: 0 auto;
  background-color: rgba(255,255,255,0.05);
  padding: 1rem;
  border-radius: 5px;
}
</style>
