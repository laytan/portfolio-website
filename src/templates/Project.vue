<template>
  <Layout>
    <navigation></navigation>
    <repo-or-project :title="$page.project.title">
      <div class="media-and-description">
        <video class="media-and-description__media" ref="video" controls muted>
          <source :src="$page.project.video">
          Your browser does not support video players.
        </video>
        <div>
          <div>
            <h2>Description</h2>
            {{ $page.project.description }}
          </div>
          <div>
            <div>
              <h2>Timestamps</h2>
              <timestamps
                @timestampClick="timestampClick"
                :timestamps="$page.project.timestamps"
                :timestamp-descriptions="$page.project.timestampDescriptions"
              ></timestamps>
            </div>
            <div :style="{ margin: '1.5rem 0 .5rem 0' }">
              <a class="btn" :href="$page.project.github">Bekijk Github</a>
              <a v-if="$page.project.url" :href="$page.project.url" class="btn btn--secondary" :style="{ marginLeft: '1rem' }">Bekijk Project</a>
            </div>
          </div>
        </div>
      </div>
    </repo-or-project>
    <dev-icon-bar class="block-spacing" :icons="$page.project.languages"></dev-icon-bar>
    <div class="container content">
      <div class="carousel-wrapper">
        <ClientOnly>
          <carousel
            :per-page="1"
            :autoplay="true"
            :center-mode="true"
            :pagination-padding="5"
            :pagination-size="14"
            pagination-color="#eeeeee"
            pagination-active-color="#ffffff"
          >
            <slide v-for="(image, i) in $page.project.images" :key="`slide-${i}`">
              <g-image :src="image"></g-image>
            </slide>
          </carousel>
        </ClientOnly>
      </div>
      <div v-html="$page.project.content" class="mt-0"></div>
      <div class="pictures">
        <g-image v-for="(image, i) in $page.project.images" :src="image" :key="i"></g-image>
      </div>
    </div>
  </Layout>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import RepoOrProject from '../components/RepoOrProject.vue';
import DevIconBar from '../components/DevIconBar.vue';
import Timestamps from '../components/Timestamps.vue';

export default {
  components: {
    Navigation,
    RepoOrProject,
    DevIconBar,
    Timestamps,
    Carousel: () =>
      import ('vue-carousel')
      .then(m => m.Carousel)
      .catch(),
    Slide: () =>
      import ('vue-carousel')
      .then(m => m.Slide)
      .catch(),
  },
  methods: {
    timestampClick: function(time) {
      this.$refs.video.currentTime = time;
      this.$refs.video.pause();
    },
  },
}
</script>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    title
    languages
    description
    content
    timestamps
    timestampDescriptions
    video
    images
    github
    url
  }
}
</page-query>

<style lang="scss" scoped>
.content {
  .pictures {
    margin-top: 1rem;
    display: none;
  }

  img {
    display: block;
    margin: 0 0 0 auto;
  }

  @media(min-width: 800px) {
    display: grid;
    gap: 2rem;
    grid-template-columns: 50ch auto;

    .pictures {
      display: block;

      img {
        margin-bottom: 1rem;
      }
    }

    .carousel-wrapper {
      display: none;
    }
  }

  @media(min-width: 1200px) {
    grid-template-columns: 70ch auto;
  }
}
</style>
