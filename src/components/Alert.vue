<template>
  <div ref="root" :class="`alert alert--${type}`">
    <span>
      <slot></slot>
    </span>
    <i @click="removeAlert()">X</i>
  </div>
</template>

<script>
export default {
  props: {
    // Error, primary, secondary, accent, success, warning
    type: {
      type: String,
      default: 'primary',
    }
  },
  mounted: function() {
    setTimeout(this.removeAlert, 3000);
  },
  methods: {
    removeAlert: function() {
      this.$refs.root.parentNode.removeChild(this.$refs.root);
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

.alert {
  border-radius: .25rem;
  border: 1px solid;
  padding: .75rem 1rem;
  display: flex;
  justify-content: space-between;
  
  i {
    font-weight: bold;
    color: currentColor;
    cursor: pointer;
    padding-left: 1rem;
  }

  &--error {
    background-color: #c53030;
    border-color: darken(#c53030, 10%);
  }

  &--primary {
    background-color: $primary;
    border-color: darken($primary, 10%);
  }

  &--secondary {
    background-color: $secondary;
    border-color: darken($secondary, 10%);
  }

  &--accent {
    background-color: $accent;
    border-color: darken($accent, 10%);
  }

  &--success {
    background-color: #34a534;
    border-color: darken(#34a534, 10%);
  }

  &--warning {
    background-color: orange;
    border-color: darken(orange, 10%);
    color: $background;
  }
}
</style>
