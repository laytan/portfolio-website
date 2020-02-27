<template>
  <header class="header">
    <nav>
      <ul>
        <div>
          <li class="nav__brand">
            <g-image src="~/images/logo.svg"></g-image>
          </li>
          <li class="active">
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/resume-laytan-laats.pdf" target="_BLANK">Resume</a>
          </li>
        </div>
        <div>
          <li>
            <a href="https://github.com/laytan" rel="noopener noreferrer" target="_BLANK">
              <i class="devicon-github-plain header__icon"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/laytan" rel="noopener noreferrer" target="_BLANK">
              <g-image src="~/images/linkedin-sign.svg" class="header__icon"></g-image>
            </a>
          </li>
        </div>
      </ul>
    </nav>
    <div class="header__1">
      <div>
        <h2>Software Developer</h2>
        <button class="btn">
          View Projects
        </button>
      </div>
    </div>
    <div class="header__2">
      <div class="header__logo">
        <g-image src="~/images/logo.svg"></g-image>
        <h1>
          LAYTAN<br>
          LAATS
        </h1>
      </div>
    </div>
    <div class="header__3">
      <div>
        <h2>Do Things Right</h2>
        <button class="btn btn--accent">
          About me
        </button>
      </div>
    </div>
  </header>  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../styles/_variables';

.header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content auto;
  height: 100vh;
  align-items: center;

  &__icon {
    font-size: 2rem;
    max-width: 2rem;
    max-height: 2rem;
    vertical-align: middle;
  }

  &__logo {
    display: flex;
    align-items: center;
    background: $background;
    padding: 1rem;
    box-shadow: 5px 5px 4px rgba(0,0,0,0.15);

    h1 {
      margin: 0;
    }

    img {
      margin-right: 0rem;
      max-height: 5.5rem;
    }
  }

  > nav {
    grid-row: 1;
    grid-column: span 6;

    .nav__brand {
      img {
        max-height: 2.5rem;
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
  }

  > div {
    grid-row: 2;
    font-size: 140%;
  }

  &__1, &__3 {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      height: 35%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        margin-bottom: 1rem;
      }
    }
  }

  &__1 {
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: $accent;
    justify-content: flex-end;
  }

  &__2 {
    grid-column-start: 3;
    grid-column-end: 5;
    display: flex;
    justify-content: center;
    z-index: 2;
  }

  &__3 {
    grid-column-start: 4;
    grid-column-end: 7;
    background-color: $primary;
    justify-content: flex-start;
  }
}
</style>
