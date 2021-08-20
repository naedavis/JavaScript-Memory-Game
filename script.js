document.addEventListener('DOMContentLoaded', () =>{
    // card option
    const cardArray = [
      {
        name: "candy",
        img: "./images/candy.png",
      },
      {
        name: "cookie",
        img: "./images/cookie.png",
      },
      {
        name: "pie",
        img: "./images/pie.png",
      },
      {
        name: "sundae",
        img: "./images/sundae.png",
      },
      {
        name: "cupcake",
        img: "./images/cupcake.png",
      },
      {
        name: "donut",
        img: "./images/donut.png",
      },
      {
        name: "candy",
        img: "./images/candy.png",
      },
      {
        name: "cookie",
        img: "./images/cookie.png",
      },
      {
        name: "pie",
        img: "./images/pie.png",
      },
      {
        name: "sundae",
        img: "./images/sundae.png",
      },
      {
        name: "cupcake",
        img: "./images/cupcake.png",
      },
      {
        name: "donut",
        img: "./images/donut.png",
      }
    ]

//  allow for randomized card positions
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen= []
    let cardsChosenId = []
    let cardsWon = []

    // creating my board
    function createBoard(){
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
             
        }
    }


    // check if it matches 
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            alert("you clicked the same image!");
            cards[optionOneId].setAttribute('src','./images/blank.png' )
            cards[optionTwoId].setAttribute("src", "./images/blank.png")
            cardsWon.push(cardsChosen)
            
        } else if (cardsChosen[0] === cardsChosen[1]){
            alert("you found a match");
            cards[optionOneId].setAttribute("src", "images/tick.png");
            cards[optionTwoId].setAttribute("src", "images/tick.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
            
        }
         else {
            alert("Sorry, Try Again");
            cards[optionOneId].setAttribute('src','./images/blank.png')
            cards[optionTwoId].setAttribute('src', './images/blank.png')
            
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations!"
        }
    }
    // flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch,500)
        }
    }
    createBoard()
} )