let game = {
  lockMode: false,
  firstCard: null,
  secondCard: null,
  cards: null,
  duration: 60 * 5,

  timeOut: function (timeOutDisplay) {
    timeOutDisplay.style.display = "flex";
  },

  setCard: function (id) {
    let card = this.cards.filter((card) => card.id === id)[0];
    if (card.flipped || this.lockMode) {
      return false;
    }
    if (!this.firstCard) {
      this.firstCard = card;
      this.firstCard.flipped = true;
      return true;
    } else {
      this.secondCard = card;
      this.secondCard.flipped = true;
      this.lockMode = true;
      return true;
    }
  },
  checkMatch: function () {
    if (!this.firstCard || !this.secondCard) {
      return false;
    }
    return this.firstCard.icon === this.secondCard.icon;
  },

  clearCards: function () {
    this.firstCard = null;
    this.secondCard = null;
    this.lockMode = false;
  },
  shuffleCards: function (cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.cards[randomIndex], this.cards[currentIndex]] = [
        this.cards[currentIndex],
        this.cards[randomIndex],
      ];
    }
  },

  unflipCards: function () {
    this.firstCard.flipped = false;
    this.secondCard.flipped = false;
    this.clearCards();
  },
  checkGameOver: function () {
    return this.cards.filter((card) => !card.flipped).length == 0;
  },

  tecs: [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
  ],

  createCardsFromTecs: function () {
    this.cards = [];
    this.tecs.map((tec) => {
      this.cards.push(this.createPairFromTec(tec));
    });
    this.cards = this.cards.flatMap((pair) => pair);
    this.shuffleCards(this.cards);
    return this.cards;
  },

  createPairFromTec: function (tec) {
    return [
      {
        id: this.createIdWithTec(tec),
        icon: tec,
        flipped: false,
      },
      {
        id: this.createIdWithTec(tec),
        icon: tec,
        flipped: false,
      },
    ];
  },

  createIdWithTec: function (tec) {
    return tec + parseInt(Math.random() * 1000);
  },

  flipCard: function (cardId, gameOverCallBack, noMatchCallBack) {
    if (this.setCard(cardId)) {
      if (this.secondCard) {
        if (this.checkMatch()) {
          this.clearCards();
          if (this.checkGameOver()) {
            gameOverCallBack();

            //gameOver
          }
        } else {
          setTimeout(() => {
            //No match
            this.unflipCards();
            noMatchCallBack();
          }, 1000);
        }
      }
    }
  },
};

export default game;
