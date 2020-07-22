<template>
  <div>
    <i ref="preferedIcon" v-show="show === 'PREFERED'" :class="`devicon-${iconName(icon)}-${iconType} ${extraClasses}`"></i>
    <i ref="originalIcon" v-show="show === 'ORIGINAL'" :class="`devicon-${iconName(icon)}-${iconType} ${extraClasses}`"></i>
    <i ref="plainIcon" v-show="show === 'PLAIN'" :class="`devicon-${iconName(icon)}-plain ${extraClasses}`"></i>
    <span ref="fallbackIcon" v-show="show === 'FALLBACK'" :class="extraClasses">{{ icon }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    extraClasses: {
      type: String,
      default: '',
    },
    iconType: {
      type: String,
      default: 'plain',
    },
  },
  data: () => ({
    show: 'PREFERED',
  }),
  // Check if the element has an icon rendered if not try the default, if there is no default just render text
  mounted: function() {
    if(!this.elHasIcon(this.$refs.preferedIcon)) {
      if(this.elHasIcon(this.$refs.plainIcon)) {
        this.show = 'PLAIN';
      } else if(this.elHasIcon(this.$refs.originalIcon)) {
        this.show = 'ORIGINAL';
      } else {
        this.show = 'FALLBACK';
      }
    }
  },
  methods: {
    elHasIcon(el) {
      return window.getComputedStyle(el, ':before').getPropertyValue('content') !== 'none';
    },
    iconName: function(icon) {
      switch(icon.toLowerCase()) {
        case 'vue':
          return 'vuejs';
        case 'c++':
          return 'cplusplus';
        case 'c#':
          return 'csharp';
        case 'css':
          return 'css3';
        case 'html':
          return 'html5';
        default:
          return icon.toLowerCase();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  display: grid;
  place-items: center;
}

i {
  display: block;
}

span {
  font-size: 2rem;
}
</style>
