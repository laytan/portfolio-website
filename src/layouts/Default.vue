<template>
  <div class="layout">
    <main>
      <slot/>
    </main>
    <footer class="bg-secondary">
      <div class="container">
        <div class="contact-info">
          <h2>Get in contact</h2>
          <a href="mailto:laytanlaats@hotmail.com" rel="noopener noreferrer" target="_BLANK" class="contact-info__row">
            <i>
              <g-image src="~/images/envelope-solid.svg"></g-image>
            </i>
            <span>
              LaytanLaats@hotmail.com
            </span>
          </a>
          <a href="https://github.com/laytan" rel="noopener noreferrer" target="_BLANK" class="contact-info__row">
            <i class="devicon-github-plain nav__icon"></i>
            <span>
              github.com/laytan
            </span>
          </a>
          <a href="https://linkedin.com/in/laytan" rel="noopener noreferrer" target="_BLANK" class="contact-info__row">
            <i>
              <g-image src="~/images/linkedin-sign.svg" class="nav__icon"></g-image>
            </i>
            <span>
              linkedin.com/in/laytan
            </span>
          </a>
        </div>
        <div class="copyright">
          <p>
            background on <g-link to="/projects">Projects page</g-link> and <g-link to="/repos">Repos page</g-link> by <a href="https://www.svgbackgrounds.com/license/" rel="noopener noreferrer">SVGBackgrounds.com</a><br>
            Icons by <a href="https://fontawesome.com/license" rel="noopener noreferrer">Fontawesome</a>
            and <a href="https://konpa.github.io/devicon/" rel="noopener noreferrer">DevIcon</a>
          </p>
          <p>
            Copyright &copy; {{ new Date().getFullYear() }} Laytan Laats
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query { 
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
footer {
  // margin-top: 5rem;
  padding-top: 1rem;
  padding-bottom: 0.1rem;
  background-color: $primary;
}

.contact-info__row {
  display: flex;
  align-items: center;
  margin-bottom: .5rem;

  > i {
    font-size: 2rem;
    width: 2rem;
    height: 2rem;

    img {
      height: 2rem;
      width: 2rem;
    }
  }

  > span {
    padding-left: 1rem;
  }
}

.copyright {
  text-align: center;
  margin-top: 2rem;

  p {
    margin: 0;
    margin-bottom: .5rem;
  }
}
</style>
