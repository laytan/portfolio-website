<template>
  <span>{{ formattedMillis }}</span>
</template>

<script>
export default {
  props: {
    millis: {
      required: true,
      type: Number,
    },
  },
  computed: {
    formattedMillis: function() {
      const minutes = Math.floor(this.millis / 60000);
      const seconds = ((this.millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    },
  },
}
</script>
