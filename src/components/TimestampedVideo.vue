<template>
  <div class="timestamped-video">
    <video ref="video" controls muted>
      <source :src="src">
      Your browser does not support video players.
    </video>
    <div>
      <div class="timestamped-video__slot">
        <slot></slot>
      </div>
      <div class="timestamped-video__timestamps">
        <h2>Timestamps</h2>
        <div class="row" v-for="timestamp in niceTimestamps" :key="timestamp.time">
          <a class="row__item" @click="setVideoTime(timestamp.time / 1000)">
            <formattedMillis :millis="timestamp.time"></formattedMillis>
          </a>
          <span class="row__item">
            {{ timestamp.description }}
          </span>
        </div>
      </div>
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
    src: {
      type: String,
      required: true,
    },
    timestamps: {
      type: Array,
      default: () => [],
    },
    timestampDescriptions: {
      type: Array,
      default: () => [],
    },
    description: {
      type: String,
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
  methods: {
    setVideoTime: function(time) {
      this.$refs.video.currentTime = time;
      this.$refs.video.pause();
    },
  },
}
</script>

<style lang="scss" scoped>
.timestamped-video {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3%;
  margin: 0 auto;
  background-color: rgba(255,255,255,0.05);
  padding: 1rem;

  video {
    width: 100%;
    grid-row: 2;
    margin-bottom: 1rem;
  }

  > div {
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr;
    align-content: start;
  }

  @media(min-width: 600px) {
    > div {
      gap: 2rem;
      grid-template-columns: 1fr 1fr;
    } 
  }

  @media(min-width: 1000px) {
    grid-template-columns: 68.5% 28.5%;

    video {
      grid-row: 1;
    }

    > div {
      gap: 0;
      grid-template-columns: 1fr;
    }
  }
}

.row {
  display: table-row;

  &__item {
    display: table-cell;
    padding: .3rem 1rem 0 0; 
  }

  &__item:nth-child(1) {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  &__item:nth-child(2) {
    padding-right: 0;
  }
}
</style>
