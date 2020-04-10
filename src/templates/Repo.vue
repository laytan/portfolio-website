<template>
  <Layout>
    <navigation></navigation>
    <repo-or-project :title="niceName">
      <div class="media-and-description">
        <div class="media-and-description__media">
          <ClientOnly v-if="$page.repo.images.length > 1">
            <carousel
              :per-page="1"
              :autoplay="true"
              :center-mode="true"
              :pagination-padding="5"
              :pagination-size="14"
              pagination-color="#eeeeee"
              pagination-active-color="#ffffff"
            >
              <slide v-for="(image, i) in $page.repo.images" :key="`slide-${i}`">
                <dynamic-g-image :img="`github/${image}`"></dynamic-g-image>
              </slide>
            </carousel>
          </ClientOnly>
          <dynamic-g-image :img="`github/${$page.repo.images[0]}`" v-else-if="$page.repo.images[0]"></dynamic-g-image>
        </div>
        <div>
          <div>
            <h2>Description</h2>
            {{ $page.repo.description }}
          </div>
          <div>
            <div>
              <h2>Statistieken</h2>
              <div class="row">
                <div class="row__item">Gemaakt op</div>
                <div class="row__item">{{ $page.repo.created_at }}</div>
              </div>
              <div class="row">
                <div class="row__item">Laatst actief op</div>
                <div class="row__item">{{ $page.repo.updated_at }}</div>
              </div>
            </div>
            <div>
              <a target="_BLANK" rel="noopener noreferrer" :href="$page.repo.html_url" class="btn">View Github</a>
            </div>
          </div>
        </div>
      </div>
    </repo-or-project>
    <dev-icon-bar class="block-spacing" :icons="$page.repo.all_languages"></dev-icon-bar>
    <div class="container">
      <div v-html="$page.repo.readme"></div>
    </div>
  </Layout>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import RepoOrProject from '../components/RepoOrProject.vue';
import DevIconBar from '../components/DevIconBar.vue';
import DynamicGImage from '../components/DynamicGImage.vue';

export default {
  components: {
    Navigation,
    RepoOrProject,
    DevIconBar,
    DynamicGImage,
    Carousel: () =>
      import ('vue-carousel')
      .then(m => m.Carousel)
      .catch(),
    Slide: () =>
      import ('vue-carousel')
      .then(m => m.Slide)
      .catch(),
  },
  computed: {
    niceName: function() {
      return this.$page.repo.name.replace('-', ' ');
    },
  },
}
</script>

<page-query>
query Repo ($id: ID!) {
  repo: repo (id: $id) {
    name,
    description,
    all_languages,
    html_url,
    created_at,
    updated_at,
    readme,
    images,
  }
}
</page-query>
