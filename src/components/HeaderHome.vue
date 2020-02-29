<template>
  <header class="header">
    <navigation></navigation>
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
import Navigation from './Navigation.vue';

export default {
  components: {
    Navigation,
  },
}
</script>

<style scoped lang="scss">
@import '../styles/_variables';

nav {
  grid-column: span 6;
}

.header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: min-content auto;
  height: 100vh;
  align-items: center;

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
