<template>
  <div class="container">
    <my-header title="Server Status"></my-header>
    <hr>
    <div class="row">
      <server-list></server-list>
      <server-details></server-details>
    </div>
    <hr>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyHeader from './MyHeader.vue';
  import ServerList from './ServerList.vue';
  import ServerDetails from './ServerDetails.vue';
  import MyFooter from './MyFooter.vue';

  export default {
    components: {
      'my-header': MyHeader,
      'server-list': ServerList,
      'server-details': ServerDetails,
      'my-footer': MyFooter,
    }
  }
</script>

<style>

</style>
