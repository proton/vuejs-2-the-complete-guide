<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="detailsAreVisible = !detailsAreVisible">Show details</button>
    <ul v-if="detailsAreVisible">
      <li><b>Phone:</b> {{ friend.phone }}</li>
      <li><b>Email:</b> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    friend: Object
  },
  data() {
    return {
      detailsAreVisible: false,
    }
  },
}
</script>
