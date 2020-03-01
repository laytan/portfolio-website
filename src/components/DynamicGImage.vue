<template>
  <div>
    <g-image :src="require('!!assets-loader!~/images/' + img)"></g-image>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
}
</script>
