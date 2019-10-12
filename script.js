class Deck {
  constructor(suitd, values, rank) {
    this.rank = rank;
    this.suit = suit;
    this.value = value;
    this.deck = []; //LOCAL VARIABLE
    this.reRuns = 0;
    this.card = {};
    this.userOnePoints = userOnePoints;
    this.bigNum = bigNum;

    this.userTwoPoints = userTwoPoints;
    this.userOne = []; //EMPTY ARRAY FOR FIRST PLAYER
    this.userTwo = []; //EMPTY ARRAY FOR SECOND PLAYER
    const suits = ["spades", "diamonds", "clubs", "hearts"]; //ARRAY OF SUITS
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
    ]; //ARRAY IF VALUES
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
    bigNum = Math.floor(Math.random() * 5100);
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

  dealerMaster() {
    //POPS 2 CARDS OFF DECK AND PLACES THEM INTO USERS HANDS
    if (deck.length !== 0) {
      userOne.push(deck.pop());
      userTwo.push(deck.pop());
      console.log(deck.length + " cards Remaining in deck pile");
    }
  }
}

class Game {
  constructor() {
    this.lucky1 = Math.floor(Math.random() * userOne.length);
    this.lucky2 = Math.floor(Math.random() * userTwo.length);
  }
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
    console.log("UserOnesCard  " + userOne[lucky1].Rank);
    console.log("UserTwosCard  " + userTwo[lucky2].Rank);
    console.log(userOne.length);
    console.log(userTwo.length);
    if (userOne[lucky1].Rank > userTwo[lucky2].Rank) {
      userOne.push(userTwo.pop());
      console.log("USERONE WON");
    } else {
      userTwo.push(userOne.pop());
      console.log("USERTWO WON");
    }
  }

  loop() {
    while (userOne.length != 0 && userTwo.length != 0) {
      console.log("UserOnesDeckIs " + userOne.length);
      console.log("UserTwoDeckIs " + userTwo.length);

      afterDeck();
    }
  }

  // console.log(userOne); NOT REVLANT
  // console.log(userTwo);

  playTheGame() {
    if (userOne[userOne.length - 1].Rank > userTwo[userTwo.length - 1].Rank) {
      userOne.push(userTwo.pop());
      userOnePoints += 1;
      userTwoPoints -= 1;
    } else if (
      userOne[userOne.length - 1].Rank < userTwo[userTwo.length - 1].Rank
    ) {
      userTwo.push(userOne.pop());
      userTwoPoints += this.userOnePoints -= 1;
    } else {
      war();
    }
  }

  war() {
    reRuns += 1;
    dealerMaster();

    if (userOne[userOne.length - 1].Rank > userTwo[userTwo.length - 1].Rank) {
      while (reRuns != 0) {
        userOne.push(userTwo.pop());
        userOnePoints += 1;
        userTwoPoints -= 1;
        reRuns -= 1;
      }
      console.log("War()");
    }
    if (userOne[userOne.length - 1].Rank < userTwo[userTwo.length - 1].Rank) {
      while (reRuns != 0) {
        userTwo.push(userOne.pop());
        reRuns -= 1;
        userTwoPoints += 1;
        userOnePoints -= 1;
      }
      console.log("war()");
    } else {
      war();
    }
  } //ends war function
}
const deck1 = new Deck();
deck1.shufflerMaster();
console.log(deck1.deck);
console.log(Object.values);
