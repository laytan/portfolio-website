<template>
<div>
  <alert 
    :style="{
      position: 'absolute',
      left: 'calc(50%)',
      transform: 'translateX(-50%)',
      width: '75%',
      maxWidth: '700px',
      marginTop: '1rem',
    }"
    type="warning"
  >
    This site is a <strong>work in progress!</strong> Not everything works.
  </alert>
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
        <h2>Do Things<br> Right</h2>
        <button class="btn btn--accent">
          About me
        </button>
      </div>
    </div>
  </header>  
</div>
</template>

<script>
import Navigation from './Navigation.vue';
import Alert from './Alert.vue';

export default {
  components: {
    Navigation,
    Alert,
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
  grid-template-columns: 1fr;
  grid-template-rows: min-content repeat(8, 1fr);
  height: 100vh;

  &__logo {
    display: flex;
    align-items: center;
    background: $background;
    padding: 1rem;
    box-shadow: 5px 5px 4px rgba(0,0,0,0.15);
    font-size: 1rem;

    h1 {
      margin: 0;
    }

    img {
      margin-right: 1rem;
      width: auto;
      height: 4rem;
    }
  }

  > div {
    font-size: 140%;
    grid-column: 1;
  }

  &__1, &__3 {
    display: flex;
    justify-content: center;
    height: 100%;
    
    h2 {
      text-align: center;
      margin: 0 0 1rem 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  &__1 {
    background-color: $accent;
    align-items: flex-start;
    justify-content: flex-end;
    grid-row-start: 2;
    grid-row-end: 6;

    > div {
      margin-top: 2rem;
    }
  }

  &__3 {
    background-color: $primary;
    justify-content: flex-start;
    align-items: flex-end;
    grid-row-start: 6;
    grid-row-end: 10;

    > div {
      margin-bottom: 2rem;
    }
  }

  &__2 {
    grid-row-start: 5;
    grid-row-end: 7;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
}

@media(min-width: 359px) {
  .header__logo {
    font-size: 1.45rem;

    img {
      height: 5.5rem;
    }
  }
}

@media(min-width: 550px) {
    .header__logo {
    font-size: 1.75rem;

    img {
      height: 6.5rem;
    }
  }
}

@media(min-width: 1000px) {
  .header {
    grid-template-rows: min-content auto;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;

    > div {
      grid-row: 2;
    }

    .header__1, .header__3 {
      height: 100%;
      flex-direction: column;
      align-items: center;

      > div {
        height: 35%;
        width: 100%;
      }
    }

    .header__1 {
      grid-column: 1 / 4;
    }

    .header__2 {
      grid-column: 3 / 5;
    }

    .header__3 {
      grid-column: 4 / 7;
    }
  }
}
</style>
