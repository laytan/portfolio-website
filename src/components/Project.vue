<template>
  <div>
    <div class="container">
      <h1>{{ title }}</h1>
      <timestamped-video :src="video" :timestamps="timestamps" :timestamp-descriptions="timestampDescriptions" :description="description">
        <h2 class="mt-0">Description</h2>
        <p>
          {{ description }}
        </p>
        <button v-if="readMore" @click="scrollToReadMore" class="btn btn-primary">Read more</button>
        <a v-if="githubLink" :href="githubLink" rel="noopener noreferrer" target="_BLANK" class="btn btn--accent ml-1">View code</a>
      </timestamped-video>
    </div>
    <dev-icon-bar :icons="languages"></dev-icon-bar>
  </div>
</template>

<script>
import TimestampedVideo from './TimestampedVideo.vue';
import DevIconBar from './DevIconBar.vue';

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
    video: {
      type: String,
      required: false,
    },
    timestamps: {
      type: Array,
      required: false,
    },
    timestampDescriptions: {
      type: Array,
      required: false,
    },
    description: {
      type: String,
    },
    readMore: {
      type: String,
    },
    githubLink: {
      type: String,
    },
  },
  components: {
    TimestampedVideo,
    DevIconBar,
  },
  methods: {
    scrollToReadMore: function() {
      document.querySelector(this.readMore).scrollIntoView({ behavior: 'smooth' });
    },
  },
}
</script>

<style scoped lang="scss">
.icons {
  margin: 2rem 0;
}
</style>
