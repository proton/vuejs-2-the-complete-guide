const App = {
  data() {
    return {
      newTask: '',
      tasks: [],
      listVisible: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask)
      this.newTask = ''
    }
  }
}

Vue.createApp(App).mount('#assignment')