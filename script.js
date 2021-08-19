document.addEventListener('DOMContentLoaded', () =>{
    // card option
    const cardArray = [
      {
        name: "bananas",
        img: "./images/banana.png",
      },
      {
        name: "blueberries",
        img: "./images/blueberry.png",
      },
      {
        name: "lemon",
        img: "./images/lemonpng",
      },
      {
        name: "olive",
        img: "./images/olive.png",
      },
      {
        name: "pear",
        img: "./images/pear.png",
      },
      {
        name: "tomato",
        img: "./images/tomato.png",
      },
      {
        name: "bananas",
        img: "./images/bananas.png",
      },
      {
        name: "blueberries",
        img: "./images/blueberry.png",
      },
      {
        name: "lemon",
        img: "./images/lemon.png",
      },
      {
        name: "olive",
        img: "./images/olive.png",
      },
      {
        name: "pear",
        img: "./images/pear.png",
      },
      {
        name: "tomato",
        img: "./images/tomato.png",
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
        const optionOneId = cardsChosen[0]
        const optionTwoId = cardsChosen[1]

        if (cardsChosen == cardsChosen) {
            alert("you clicked the same image!");
            cards[optionOneId].setAttribute('src','./images/color.png' )
            cards[optionTwoId].setAttribute("src", "./images/color.png")
            cardsWon.push(cardsChosen)
            
        } else if (cardsChosen[0] === cardsChosen[1]){
            alert("you found a match");
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
            
        }
         else {
            alert("Sorry, Try Again");
            cards[optionOneId].setAttribute('src','./images/color.png')
            cards[optionTwoId].setAttribute('src', './images/color.png')
            
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