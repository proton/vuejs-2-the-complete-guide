new Vue({
    el: '#exercise',
    data: {
      value: ''
    },
    methods: {
        showAlert: function() {
          alert('some alert');
      },
      storeData: function(event) {
          this.value += event.which;
      }
    }
});