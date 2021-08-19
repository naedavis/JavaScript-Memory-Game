document.addEventListener('DOMContentLoaded', () =>{
    // card option
    const cardArray = [
      {
        name: "bananas",
        img: "./images/bananas-icon(1).png",
      },
      {
        name: "blueberries",
        img: "./images/blueberries-icon.png",
      },
      {
        name: "lemon",
        img: "./images/lemon-icon.png",
      },
      {
        name: "olive",
        img: "./images/olive-icon.png",
      },
      {
        name: "pear",
        img: "./images/pear-icon.png",
      },
      {
        name: "tomato",
        img: "./images/tomato-icon.png",
      },
      {
        name: "bananas",
        img: "./images/bananas-icon(1).png",
      },
      {
        name: "blueberries",
        img: "./images/blueberries-icon.png",
      },
      {
        name: "lemon",
        img: "./images/lemon-icon.png",
      },
      {
        name: "olive",
        img: "./images/olive-icon.png",
      },
      {
        name: "pear",
        img: "./images/pear-icon.png",
      },
      {
        name: "tomato",
        img: "./images/tomato-icon.png",
      }
    ];

    const grid = document.querySelector('.grid')

    // creating my board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank-keyboard-key-icon.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }
} )