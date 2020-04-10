<template>
  <div class="projects">
    <div v-for="{ node: project } in cards" :key="project.name">
      <div>
        <div v-if="project.images && project.images[0]">
          <dynamic-g-image v-if="type === 'github'" :img="`github/${project.images[0]}`"></dynamic-g-image>
          <g-image v-else-if="type === 'manual'" :src="project.images[0]"></g-image>
        </div>
        <div v-else>
        </div>
      </div>
      <div>
        <div>
          <h3>
            <nice-name :name="project.name"></nice-name>
          </h3>
          <p>{{ project.description }}</p>
        </div>
        <g-link class="btn" :to="`/${urlPrefix}/${project.name.toLowerCase()}`">Learn more</g-link>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicGImage from './DynamicGImage';
import NiceName from './NiceName';

export default {
  components: {
    DynamicGImage,
    NiceName,
  },
  props: {
    type: {
      type: String,
      default: 'manual',
      validator: function(value) {
        return ['manual', 'github'].includes(value);
      },
    },
    cards: {
      type: Array,
      required: true,
      validator: function(value) {
        for(const { node: project } of value) {
          if(!project.name || !project.description) {
            return false;
          }
        }
        return true;
      },
    },
  },
  computed: {
    urlPrefix: function() {
      return this.type === 'manual' ? 'projects' : 'repos';
    }
  },
}
</script>

<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: stretch;

  @media(min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  > div {
    background: rgba(255, 255, 255, .02);
    display: flex;
    flex-direction: column;

    > div:nth-child(1) {
      flex-grow: 1;
      background-color: rgba(128, 128, 128, 0.05);
    }

    > div:nth-child(2) {
      padding: 0 10px 10px 10px;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
    }
  }
}
</style>
