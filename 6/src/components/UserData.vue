<template>
  <li>
    <ul>
      <li><b>Name:</b> <input type="text" v-model="name" /></li>
      <li><b>Age:</b> <input type="number" v-model="age" /></li>
      <button @click.prevent="setUserData">Set User Data</button>
    </ul>
  </li>
</template>

<script>
// UserData should output two input fields => for name and age
export default {
  emits: ['set-user-data'],
  props: {
  },
  data() {
    return {
      name: '',
      age: '',
    }
  },
  methods: {
    setUserData() {
      this.$emit('set-user-data', {name: this.name, age: this.age})
    }
  },
}
</script>
