<template>
  <nav class="nav">
    <ul>
      <div>
        <li class="nav__brand">
          <g-link to="/">
            <img src="/images/logo.svg">
          </g-link>
        </li>
        <li v-for="link in links" :key="link.url" :class="insertActiveClass(link)">
          <a v-if="link.external" target="_BLANK" rel="noopener noreferrer" :href="link.url">
            {{ link.title }}
          </a>
          <g-link v-else :to="link.url">
            {{ link.title }}
          </g-link>
        </li>
      </div>
      <div class="right">
        <li>
          <a href="mailto:laytanlaats@hotmail.com" rel="noopener noreferrer">
            <img src="/images/envelope-solid.svg" class="nav__icon">
          </a>
        </li>
        <li>
          <a href="https://github.com/laytan" rel="noopener noreferrer" target="_BLANK">
            <i class="devicon-github-plain nav__icon"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/laytan" rel="noopener noreferrer" target="_BLANK">
            <img src="/images/linkedin-sign.svg" class="nav__icon">
          </a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Home',
        url: '/',
        external: false,
      },
      // {
      //   title: 'Projects',
      //   url: '/projects',
      //   external: false,
      // },
      {
        title: 'Projects',
        url: '/repos',
        external: false,
      },
      {
        title: 'Resume',
        url: '/resume-laytan-laats.pdf',
        external: true,
      },
    ],
  }),
  methods: {
    insertActiveClass: function(link) {
      if(link.external) {
        return '';
      }

      if(this.$route.fullPath === link.url) {
        return 'active';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

.nav {
  border-bottom: 1px solid rgba($accent, .15);

  &__brand {
    display: none;
    margin-right: 2rem;

    img {
      width: auto;
      height: 2.5rem;
    }

    @media(min-width: 550px) {
      display: block;
    }
  }
  
  &__icon {
    font-size: 2rem;
    max-width: 2rem;
    max-height: 2rem;
    vertical-align: middle;
  }
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  margin-left: 1rem;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;

    li {
      margin-right: 1rem;

      a {
        color: $text;
        padding: .25rem 0;
        transition: .1s ease-in-out color;
      }

      &:hover a {
        color: rgba($text, .8);
      }

      &.active a {
        border-bottom: 1px solid $accent;
      }
    }
  }
}

.right {
  margin-top: 1rem;

  @media(min-width: 500px) {
    margin-top: 0;
  }
}
</style>
