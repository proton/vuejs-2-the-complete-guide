<template>
  <li class="list-group-item">
    Server #{{ index }}
  </li>
</template>



<script>
  export default {
    props: {
      index: Number
    },
  };
</script>