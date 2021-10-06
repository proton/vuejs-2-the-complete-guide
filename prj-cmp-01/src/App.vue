<template>
  <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue'

export default {
  components: {
    StoredResources
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>