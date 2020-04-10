<template>
  <span>
    {{ niceName }}
  </span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    niceName: function() {
      const words = this.name.split('-');
      const uppercased = words.map(word => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`);
      return uppercased.join(' ');
    },
  },
}
</script>
