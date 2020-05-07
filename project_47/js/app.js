new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    attack: function() {
      let damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({isPlayer: true, text: 'Player hits Monster for ' + damage});
      this.monsterAction();
    },
    specialAttack: function() {
      let damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({isPlayer: true, text: 'Player hits Monster hard for ' + damage});
      this.monsterAction();
    },
    heal: function() {
      this.playerHealth = Math.min(this.playerHealth + 10, 100);
      this.turns.unshift({isPlayer: true, text: 'Player heals for 10'});
      this.monsterAction();
    },
    giveUp: function() {
      return this.defeat();
    },
    monsterAction: function() {
      if (this.monsterHealth <= 0) return this.victory();
      let damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({isPlayer: false, text: 'Monster hits Player for ' + damage});
      if (this.playerHealth <= 0) return this.defeat();
    },
    victory: function() {
      alert('You won!');
      this.gameIsRunning = false;
    },
    defeat: function() {
      alert('You lost!');
      this.gameIsRunning = false;
    },
    calculateDamage: function(min, max) {
      let damage = Math.max(Math.floor(Math.random() * max + 1), min);
      return damage;
    }
  }
});