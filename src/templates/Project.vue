<template>
  <Layout>
    <h1>{{ $page.project.title }}</h1>
    <ul>
      <li v-for="language in $page.project.languages" :key="language">
        {{ language }}
      </li>
    </ul>
    <p v-html="$page.project.content">
    </p>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.project.title,
      meta: [
        {
          name: 'description',
          content: this.$page.project.description
        }
      ]
    }
  }
}
</script>

<page-query>
query Project ($id: ID!) {
  project: project (id: $id) {
    title
    languages
    description
    content
  }
}
</page-query>

<style scoped lang="scss">
p {
  max-width: 65ch;
  margin: 0 auto;
}
</style>
