angular.module('app').component('endGame', {
	templateUrl: 'hangman/end-game/end-game.html',
	bindings: {
    name: '<',
	 state: '<',
	 callback: '&'
 	},
	controller: function EndGameController() {

	}
});