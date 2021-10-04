<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <friend-contact v-for="friend in friends" :key="friend.id" :friend="friend"></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
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
