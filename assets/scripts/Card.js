
export default class Card {
      constructor(suit, value) {
          this.suit = suit;
          this.value = value
      }
      get color() {
          return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
        }
        getHTML() {
            const cardDiv = document.createElement("div")
            cardDiv.innerText = this.suit
            cardDiv.classList.add("innerCard", this.color)
            cardDiv.dataset.value = `${this.value} ${this.suit}`
            return cardDiv
          }

    }

































// const path = "public/images/poker-cards/";
// let cards = [
//       {
//       name: "two",
//       value: 2,
//       suit: "clubs",
//       path:`${path}2_of_clubs.png`,
//       },
//       {
//       name: "two",
//       value: 2,
//       suit: "diamonds",
//       path:`${path}2_of_diamonds.png`,
//       },
//       {
//       name:"two",
//       value:2,
//       suit:"hearts",
//       path:`${path}2_of_hearts.png`,
//       },
//       {
//       name:"two",
//       value:2,
//       suit: "spades",
//       path:`${path}2_of_spades.png`,
//       },
//       {
//       name: "three",
//       value: 3,
//       suit: "clubs",
//       path:`${path}3_of_clubs.png`,
//       },
//       {
//       name:"three",
//       value:3,
//       suit:"diamonds",
//       path:`${path}3_of_diamonds.png`,
//       },
//       {
//       name: "three",
//       value: 3,
//       suit: "hearts",
//       path:`${path}3_of_hearts.png`,
//       },
//       {
//       name:"three",
//       value:3,
//       suit: "spades",
//       path:`${path}3_of_spades.png`,
//       },
//       {
//       name: "four",
//       value:4,
//       suit: "clubs",
//       path:`${path}4_of_clubs.png`,
//       },
//       {
//       name: "four",
//       value: 4,
//       suit:"diamonds",
//       path:`${path}4_of_diamonds.png`,
//       },
//       {
//       name: "four",
//       value:4,
//       suit: "",
//       path:`${path}4_of_hearts.png`,
//       },
//       {
//       name:"four",
//       value:4,
//       suit: "spades",
//       path:`${path}4_of_spades.png`,
//       },
//       {
//       name: "five",
//       value: 5,
//       suit: "clubs",
//       path:`${path}5_of_clubs.png`,
//       },
//       {
//       name: "five",
//       value: 5,
//       suit: "diamonds",
//       path:`${path}5_of_diamonds.png`,
//       },
//       {
//       name: "five",
//       value: 5,
//       suit: "hearts",
//       path:`${path}5_of_hearts.png`,
//       },
//       {
//       name: "five",
//       value: 5,
//       suit: "spades",
//       path:`${path}5_of_spades.png`,
//       },
//       {
//       name: "six",
//       value: 6,
//       suit: "clubs",
//       path:`${path}6_of_clubs.png`,
//       },
//       {
//       name: "six",
//       value: 6,
//       suit: "diamonds",
//       path:`${path}6_of_diamonds.png`,
//       },
//       {
//       name: "six",
//       value: 6,
//       suit: "hearts",
//       path:`${path}6_of_hearts.png`,
//       },
//       {
//       name: "six",
//       value: 6,
//       suit: "spades",
//       path:`${path}6_of_spades.png`,
//       },
//       {
//       name: "seven",
//       value: 7,
//       suit: "clubs",
//       path:`${path}7_of_clubs.png`,
//       },
//       {
//       name: "seven",
//       value: 7,
//       suit:"diamonds",
//       path:`${path}7_of_diamonds.png`,
//       },
//       {
//       name: "seven",
//       value: 7,
//       suit: "hearts",
//       path:`${path}7_of_hearts.png`,
//       },
//       {
//       name: "seven",
//       value: 7,
//       suit: "spades",
//       path:`${path}7_of_spades.png`,
//       },
//       {
//       name: "eight",
//       value: 8,
//       suit: "clubs",
//       path:`${path}8_of_clubs.png`,
//       },
//       {
//       name: "eight",
//       value: 8,
//       suit: "diamonds",
//       path:`${path}8_of_diamonds.png`,
//       },
//       {
//       name: "eight",
//       value: 8,
//       suit: "hearts",
//       path:`${path}8_of_hearts.png`,
//       },
//       {
//       name: "eight",
//       value: 8,
//       suit: "spades",
//       path:`${path}8_of_spades.png`,
//       },
//       {
//       name: "nine",
//       value: 9,
//       suit: "clubs",
//       path:`${path}9_of_clubs.png`,
//       },
//       {
//       name: "nine",
//       value: 9,
//       suit: "diamonds",
//       path:`${path}9_of_diamonds.png`,
//       },
//       {
//       name: "nine",
//       value: 9,
//       suit: "hearts",
//       path:`${path}9_of_hearts.png`,
//       },
//       {
//       name: "nine",
//       value: 9,
//       suit: "spades",
//       path:`${path}9_of_spades.png`,
//       },
//       {
//       name: "ten",
//       value: 10,
//       suit: "clubs",
//       path:`${path}10_of_clubs.png`,
//       },
//       {
//       name: "ten",
//       value: 10,
//       suit: "diamonds",
//       path:`${path}10_of_diamonds.png`,
//       },
//       {
//       name: "ten",
//       value: 10,
//       suit: "hearts",
//       path:`${path}10_of_hearts.png`,
//       },
//       {
//       name: "ten",
//       value: 10,
//       suit: "spades",
//       path:`${path}10_of_spades.png`,
//       },
//       {
//       name: "ace",
//       value: 14,
//       suit: "clubs",
//       path:`${path}ace_of_clubs.png`,
//       },
//       {
//       name: "ace",
//       value: 14,
//       suit: "diamonds",
//       path:`${path}ace_of_diamonds.png`,
//       },
//       {
//       name: "ace",
//       value: 14,
//       suit: "hearts",
//       path:`${path}ace_of_hearts.png`,
//       },
//       {
//       name: "ace",
//       value: 14,
//       suit: "spades",
//       path:`${path}ace_of_spades.png`,
//       },
//       {
//       name: "jack",
//       value: 11,
//       suit: "clubs",
//       path:`${path}jack_of_clubs.png`,
//       },
//       {
//       name: "jack",
//       value: 11,
//       suit: "diamonds",
//       path:`${path}jack_of_diamonds.png`,
//       },
//       {
//       name: "jack",
//       value: 11,
//       suit: "hearts",
//       path:`${path}jack_of_hearts.png`,
//       },
//       {
//       name: "jack",
//       value: 11,
//       suit: "spades",
//       path:`${path}jack_of_spades.png`,
//       },
//       {
//       name: "queen",
//       value: 12,
//       suit: "clubs",
//       path:`${path}queen_of_clubs.png`,
//       },
//       {
//       name: "queen",
//       value: 12,
//       suit: "diamonds",
//       path:`${path}queen_of_diamonds.png`,
//       },
//       {
//       name: "queen",
//       value: 12,
//       suit: "hearts",
//       path:`${path}queen_of_hearts.png`,
//       },
//       {
//       name: "queen",
//       value: 12,
//       suit: "spades",
//       path:`${path}queen_of_spades.png`,
//       },
//       {
//       name: "king",
//       value: 13,
//       suit: "clubs",
//       path:`${path}king_of_clubs.png`,
//       },
//       {
//       name: "king",
//       value: 13,
//       suit: "diamonds",
//       path:`${path}king_of_diamonds.png`,
//       },
//       {
//       name: "king",
//       value: 13,
//       suit: "hearts",
//       path:`${path}king_of_hearts.png`,
//       },
//       {
//       name: "king",
//       value: 13,
//       suit: "spades",
//       path:`${path}king_of_spades.png`
//       },      

// ];