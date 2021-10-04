const App = {
  data() {
    return {
      output2: '',
      output3: '',
    }
  },
  methods: {
    showAlert() {
      alert('hello!')
    },
    changeOutput2(event) {
      this.output2 = event.target.value
    },
    changeOutput3(event) {
      this.output3 = event.target.value
    },
  }
}

Vue.createApp(App).mount('#assignment')