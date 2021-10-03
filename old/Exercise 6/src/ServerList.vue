<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server-list-element :index="index" v-for="index in 5"></server-list-element>
    </ul>
  </div>
</template>

<script>
  import ServerListElement from './ServerListElement.vue';
  export default {
    components: {
      'server-list-element': ServerListElement,
    }
  }
</script>