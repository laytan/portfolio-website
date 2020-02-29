<template>
  <nav class="nav">
    <ul>
      <div>
        <li class="nav__brand">
          <g-link to="/">
            <g-image src="~/images/logo.svg"></g-image>
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
      <div>
        <li>
          <a href="https://github.com/laytan" rel="noopener noreferrer" target="_BLANK">
            <i class="devicon-github-plain nav__icon"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/laytan" rel="noopener noreferrer" target="_BLANK">
            <g-image src="~/images/linkedin-sign.svg" class="nav__icon"></g-image>
          </a>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    path: window.location.pathname,
    links: [
      {
        title: 'Projects',
        url: '/projects',
        external: false,
      },
      {
        title: 'Contact',
        url: '/contact',
        external: false,
      },
      {
        title: 'Resume',
        url: '/resume-laytan-laats.pdf',
        external: true,
      },
    ],
  }),
  watch: {
    $route: function(to, from) {
      this.path = to.fullPath;
    },
  },
  methods: {
    insertActiveClass: function(link) {
      if(link.external) {
        return '';
      }

      if(this.path === link.url) {
        return 'active';
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/_variables';

.nav {
  &__brand {
    img {
      max-height: 2.5rem;
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
</style>
