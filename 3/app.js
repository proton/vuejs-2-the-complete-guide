const App = {
  data() {
    return {
      number: 0,
    }
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet!';
      } else if (this.number === 37) {
        return this.number;
      } else {
        return 'Too much!';
      }
    },
  },
  watch: {
    result() {
      const that = this
      setTimeout(_ => that.number = 0, 5000)
    }
  },
}

Vue.createApp(App).mount('#assignment')