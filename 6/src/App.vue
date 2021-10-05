<template>
  <div>
    <active-user :user="user"></active-user>
    <user-data @set-user-data="setUserData"></user-data>
  </div>
</template>

<script>
import UserData from './components/UserData.vue'
import ActiveUser from './components/ActiveUser.vue'
export default {
  components: { UserData, ActiveUser },
  data() {
    return {
      user: {
        name: 'Petr Savichev',
        age: 32,
      },
    }
  },
  methods: {
    setUserData(user) {
      this.user = user
    }
  },
}
</script>
