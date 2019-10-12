class Deck {
  //got this from a website

  constructor() {
    this.deck = [];
    this.userOne = [];
    this.userTwo = [];
    let temp = 1;
    let s1 = Math.floor(Math.random() * 52);
    let s2 = Math.floor(Math.random() * 52);
    this.bigNum = Math.floor(Math.random() * 2000);
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({
          Value: values[value],
          Suit: suits[suit], //CREATION OF THE ACTUAL OBJECT(PULLED THIS IDEA FROM "THATSOFTWAREDUDE.COM")
          Rank: rank[value]
        });
      }
    }
  }
  shuffle() {
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({
          Value: values[value],
          Suit: suits[suit], //CREATION OF THE ACTUAL OBJECT(PULLED THIS IDEA FROM "THATSOFTWAREDUDE.COM")
          Rank: rank[value]
        });
      }
    }
  }
} //got this from a website

const deck1 = new Deck();

console.log(deck1.deck);
