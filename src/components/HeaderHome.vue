<template>
<div>
  <header class="header">
    <navigation></navigation>
    <div class="header__1">
      <div>
        <p class="text-center lead">
          My pet projects
        </p>
        <custom-button to="/repos" :outside="false" size="lg">
          View Projects
        </custom-button>
      </div>
    </div>
    <div class="header__2">
      <div class="header__logo">
        <img onload="this.parentNode.classList.add('loaded');" src="/images/logo.svg">
        <h1>
          LAYTAN<br>
          LAATS
        </h1>
      </div>
    </div>
    <div class="header__3">
      <div>
        <p class="lead">
          Everything layed out for the lazy
        </p>
        <custom-button to="/resume-laytan-laats.pdf" button-type="accent" size="lg">
          View Resume
        </custom-button>
      </div>
    </div>
  </header>  
</div>
</template>

<script>
import Navigation from './Navigation.vue';
import Alert from './Alert.vue';
import CustomButton from './CustomButton.vue';

export default {
  components: {
    Navigation,
    Alert,
    CustomButton,
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
  height: 90vh;

  &__logo {
    display: flex;
    align-items: center;
    background: $background;
    padding: 1rem;
    box-shadow: 5px 5px 4px rgba(0,0,0,0.15);
    font-size: 1rem;

    &:not(.loaded) {
      transform: scale(0);
    }

    &.loaded {
      animation: bounce .35s;
  
      @keyframes bounce {
        0% {
          transform: scale(0);
        }
  
        90% {
          transform: scale(1.2);
        }
  
        100% {
          transform: none;
        }
      }
    }

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

.lead {
  font-size: 120%;
  letter-spacing: 1px;
  text-align: center;
  margin: 0;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 1px #000;
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
