<template>
  <ul>
    <learning-resource v-for="res in storedResources" :key="res.id" :resource="res"></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue'

export default {
  components: {
    LearningResource
  },
  data() {
    return {
      storedResources: [
        { id: 1, title: 'proton.name', description: "Peter Savichev's website", link: 'https://proton.name' },
        { id: 2, title: 'Google', description: "World's most popular search engine", link: 'https://google.com' },
      ],
    }
  },
}
</script>
