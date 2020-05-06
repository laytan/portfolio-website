<template>
  <div @click="$emit('click')" :class="`${buttonType} hover-${hover} ${size}`">
    <button class="button" v-if="to.length === 0">
      <slot></slot>
    </button>
    <a class="button" v-if="to.length > 0 && outside" :href="to" rel="noopener noreferrer nofollow" target="_BLANK">
      <slot></slot>
    </a>
    <g-link class="button" v-if="to.length > 0 && !outside" :to="to">
      <slot></slot>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    outside: {
      type: Boolean,
      default: true,
    },
    buttonType: {
      type: String,
      default: 'primary',
    },
    hover: {
      type: String,
      default: 'background',
    },
    size: {
      type: String,
      default: 'm',
    },
  }
}
</script>

<style lang="scss" scoped>
.button {
  color: var(--text);
  background: var(--primary);

  text-transform: uppercase;
  text-decoration: none;
  border-radius: 0px;
  display: inline-block;
  border: none;
  transition: color .35s ease 0s, letter-spacing .35s ease 0s, background-color .35s ease 0s;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.6);
  }
}

.m .button {
  padding: 10px 20px;

  &:hover {
    letter-spacing: 1.5px;
  }
}

.lg .button {
  padding: 15px 20px;

  &:hover {
    letter-spacing: 2px;
  }
}

.secondary .button {
  background: var(--secondary);
}

.accent .button {
  background: var(--accent);
}

.hover-background .button:hover {
  background: var(--background);
}

.hover-text .button:hover {
  color: var(--background);
  background: var(--text);
}
</style>
