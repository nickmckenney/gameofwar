class Deck {
  constructor() {
    this.deckLength = 52;

    this.deck = []; //LOCAL VARIABLE

    const suits = ["spades", "diamonds", "clubs", "hearts"];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
    const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = {
          Value: values[x],
          Suit: suits[i], //CREATION OF THE ACTUAL OBJECT(PULLED THIS IDEA FROM "THATSOFTWAREDUDE.COM")
          Rank: rank[x]
        };
        this.deck.push(card); //PUSHING THE CARD INSIDE THE DECK ARRAY
      }
    } //ARRAY OF POINTS OF CARDS
  }
  shufflerMaster() {
    let shuffled = [];
    let bigNum = Math.floor(Math.random() * 5100);
    const { deck } = this; //got this from wsvincet
    //IT shuffles them
    while (bigNum != 1) {
      bigNum -= 1;
      let scrambler1 = Math.floor(Math.random() * 52);
      let scrambler2 = Math.floor(Math.random() * 52);
      let temperary = deck[scrambler1];
      deck[scrambler1] = deck[scrambler2];
      deck[scrambler2] = temperary;
    }
    return this;
  }
}
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS
//EVERYTHING ABOVE WORKS

class Game {
  constructor(lucky1, luck2) {}
  inDeck() {
    //asigning PLAYERS CARDS UNTILL DESK ARRAY IS EMPTY
    while (deck.length != 0) {
      dealerMaster();
      playTheGame();
    }
  }
  //END OF FUNCTION
  //END OF FUNCTION

  wholeGame() {
    //RUNS THE WHOLE GAME
    shufflerMaster();
    inDeck();
    loop();
  }
  afterDeck() {
    let lucky1 = Math.floor(Math.random() * player1.length);
    let lucky2 = Math.floor(Math.random() * player2.length);
    console.log(player1[lucky1].Rank);
    console.log(player2[lucky2].Rank);
    console.log(player1.length);
    console.log(player2.length);
    if (player1[lucky1].Rank > player2[lucky2].Rank) {
      player1.push(player2.pop());
      console.log("player1 WON");
    } else {
      player2.push(player1.pop());
      console.log("player2 WON");
    }
  }

  loop() {
    while (player1.length != 0 && player2.length != 0) {
      console.log("player1sDeckIs " + player1.length);
      console.log("player2DeckIs " + player2.length);

      afterDeck();
    }
  }

  // console.log(player1); NOT REVLANT
  // console.log(player2);

  playTheGame() {
    if (player1[player1.length - 1].Rank > player2[player2.length - 1].Rank) {
      player1.push(player2.pop());
    } else if (
      player1[player1.length - 1].Rank < player2[player2.length - 1].Rank
    ) {
      player2.push(player1.pop());
    } else {
      war();
    }
  }

  war() {
    reRuns += 1;
    dealerMaster();

    if (player1[player1.length - 1].Rank > player2[player2.length - 1].Rank) {
      while (reRuns != 0) {
        player1.push(player2.pop());
        player1Points += 1;
        player2Points -= 1;
        reRuns -= 1;
      }
      console.log("War()");
    }
    if (player1[player1.length - 1].Rank < player2[player2.length - 1].Rank) {
      while (reRuns != 0) {
        player2.push(player1.pop());
        reRuns -= 1;
        player2Points += 1;
        player1Points -= 1;
      }
      console.log("war()");
    } else {
      war();
    }
  } //ends war function
}

const Deck1 = new Deck();
Deck1.shufflerMaster();
let player1 = Deck1.deck.slice(0, 26);
let player2 = Deck1.deck.slice(26, 52);
console.log(player1);
console.log(player2);

const Game1 = new Game();
Game1.playTheGame();
console.log(Game1);
