<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        {{ friend.name }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'Petr Savichev',
          phone: '123456789',
          email: 'psavichev@gmail.com'
        },
        {
          id: 1,
          name: 'Mr President',
          phone: '123456789',
          email: 'some@example.com'
        },
      ]
    }
  },
}
</script>
