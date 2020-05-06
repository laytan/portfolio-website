<template>
  <div :class="buttonType">
    <a v-if="outside" :href="to" rel="noopener noreferrer nofollow" target="_BLANK">
      <slot></slot>
    </a>
    <g-link v-else :to="to">
      <slot></slot>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    outside: {
      type: Boolean,
      default: true,
    },
    buttonType: {
      type: String,
      default: 'primary',
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  color: var(--text);
  background: var(--primary);

  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 20px;
  border-radius: 0px;
  display: inline-block;
  border: none;
  transition: all .35s ease 0s;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    letter-spacing: 2px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.6);
  }
}


.secondary a {
  background: var(--secondary);
}

.accent a {
  background: var(--accent);
}

.secondary a, .primary a, .accent a {
  &:hover {
    background: var(--background);
  }
}
</style>
