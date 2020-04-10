<template>
  <div>
    <div class="row" v-for="timestamp in niceTimestamps" :key="timestamp.time">
      <a class="row__item" @click="$emit('timestampClick', timestamp.time / 1000)">
        <formattedMillis :millis="timestamp.time"></formattedMillis>
      </a>
      <span class="row__item">
        {{ timestamp.description }}
      </span>
    </div>
  </div>
</template>

<script>
import FormattedMillis from './FormattedMillis.vue';

export default {
  components: {
    FormattedMillis,
  },
  props: {
    timestamps: {
      type: Array,
      default: () => [],
    },
    timestampDescriptions: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    niceTimestamps: function() {
      if(this.timestamps.length !== this.timestampDescriptions.length) {
        throw new Error('timestamp and timestampdescriptions props must be the same length');
        return;
      }
      return this.timestamps.map((timestamp, index) => ({ time: timestamp, description: this.timestampDescriptions[index] }));
    },
  },
}
</script>
