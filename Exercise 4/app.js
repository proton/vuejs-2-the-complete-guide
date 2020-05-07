new Vue({
  el: '#exercise',
  data: {
    effect_phase: -1,
    thirdClassName: '',
    someClass: '',
    someAnotherClassValue: 'false',
    progress: 0,
    someColor: 'red'
  },
  computed: {
    progressInPx: function() {
      return this.progress + 'px';
    }
  },
  methods: {
    toggleEffect: function() {
      if (this.effect_phase < 0 )
        this.effect_phase = 0;
      else
        this.effect_phase = 1 - this.effect_phase;
    },
    startEffect: function() {
      setInterval(this.toggleEffect.bind(this), 1000);
    },
    startProgress: function() {
      this.progress += 1;
      if (this.progress < 100)
        setTimeout(this.startProgress.bind(this), 300);
    }
  }
});