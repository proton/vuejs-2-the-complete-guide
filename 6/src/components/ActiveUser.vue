<template>
  <li>
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </li>
</template>

<script>
// ActiveUser should output a username (h2) and age (h3)
export default {
  props: {
    user: Object
  },
  data() {
    return {
    }
  },
}
</script>
