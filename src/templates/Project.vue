<template>
  <Layout>
    <navigation></navigation>
    <project
      :title="$page.project.title"
      :languages="$page.project.languages"
      :video="$page.project.video"
      :timestamps="$page.project.timestamps"
      :timestamp-descriptions="$page.project.timestampDescriptions"
      :description="$page.project.description"
      read-more="#content"
      :github-link="$page.project.github"
    >
    </project>
    <div id="content" class="container">
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
import Project from '../components/Project.vue';

export default {
  metaInfo () {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  },
  components: {
    Navigation,
    Project,
    Carousel: () =>
      import ('vue-carousel')
      .then(m => m.Carousel)
      .catch(),
    Slide: () =>
      import ('vue-carousel')
      .then(m => m.Slide)
      .catch(),
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
  }
}
</page-query>

<style lang="scss" scoped>
#content {
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
