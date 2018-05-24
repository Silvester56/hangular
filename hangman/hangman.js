'use strict';

angular.module("app").controller("mainController", function(WORDLIST) {
  this.state = 0;
	this.lifes = 5;
	this.word = [];
	this.letters = [];

	function randomWord() {
		return WORDLIST[Math.floor(Math.random() * (WORDLIST.length - 1))];
	}

	this.reset = () => {
		this.lifes = 5;
		this.word = [];
		this.letters = [];
		this.start();
	}

	this.start = () => {
		let wtab = randomWord().toUpperCase().split('');
		let startingletter = false;

		this.state = 1;
		for (let i = 0; i < wtab.length; i++) {
			startingletter = (wtab[i] == wtab[0] || wtab[i] == wtab[wtab.length - 1]);
			this.word.push({letter: wtab[i], found: startingletter});
		}
		for (let i = 65; i < 91; i++) {
			startingletter = (String.fromCharCode(i) == wtab[0] || String.fromCharCode(i) == wtab[wtab.length - 1]);
			this.letters.push({letter: String.fromCharCode(i), disabled: startingletter});
		}
	}

	this.clickLetter = (l) => {
		let notfound = true;
		let won = true;

    if (this.state == 1) {
      l.disabled = true;
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i].letter == l.letter) {
          notfound = false;
          this.word[i].found = true;
        }
        if (this.word[i].found == false) {
          won = false;
        }
      }
      if (won) {
        this.state = 2;
      }
      if (notfound) {
        this.lifes = this.lifes - 1;
        if (this.lifes == 0) {
          this.state = 3;
        }
      }
    }
	}
});
