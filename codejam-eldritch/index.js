import ancients from "./data/ancients.js"

const ancient = document.querySelector('.ancient-container')
const azathoth = document.querySelector('.azathoth')
const cthulhu = document.querySelector('.cthulhu')
const iogSothoth = document.querySelector('.iogSothoth')
const shubNiggurath = document.querySelector('.shubNiggurath')

const difficulty = document.querySelector('.difficulty-container')
const normal = document.querySelector('.normal')
const shuffleButton = document.querySelector('.shuffle-button')
const deckContainer = document.querySelector('.deck-container')
const desk = document.querySelector('.deck')

let greenDesk = []
let brownDesk = []
let blueDesk = []


azathoth.addEventListener('click', () => {
   azathoth.classList.add("active");
   cthulhu.classList.remove("active");
   iogSothoth.classList.remove("active");
   shubNiggurath.classList.remove("active");
})
cthulhu.addEventListener('click', () => {
   cthulhu.classList.add("active");
   azathoth.classList.remove("active");
   iogSothoth.classList.remove("active");
   shubNiggurath.classList.remove("active");
})
iogSothoth.addEventListener('click', () => {
   iogSothoth.classList.add("active");
   azathoth.classList.remove("active");
   cthulhu.classList.remove("active");
   shubNiggurath.classList.remove("active");
})
shubNiggurath.addEventListener('click', () => {
   iogSothoth.classList.remove("active");
   azathoth.classList.remove("active");
   cthulhu.classList.remove("active");
   shubNiggurath.classList.add("active");
})


let cardName
ancient.addEventListener('click', function ({ target }) {
   cardName = [...this.children].indexOf(target)
   greenDesk = []
   brownDesk = []
   blueDesk = []
   
   stageOne = [[], [], []];
   stageTwo = [[], [], []];
   stageThree = [[], [], []];

   pushGreenDesk()
   pushBrownDesk()
   pushBlueDesk()
   
   pushStage()
   textStage()
   
   difficulty.classList.remove('visibility')
   normal.classList.remove('activeDiff') 
   shuffleButton.classList.remove('activeDiff') 
   shuffleButton.classList.add('visibility')
   deckContainer.classList.add('visibility')
   desk.classList.remove('visibility') 
   last.style.backgroundImage = 'none'
})


normal.addEventListener('click', () => {
   normal.classList.add('activeDiff') 
   shuffleButton.classList.remove('visibility')
})
shuffleButton.addEventListener('click', () => {
   shuffleButton.classList.add('activeDiff') 
   deckContainer.classList.remove('visibility')
})


function pushGreenDesk() {
   let g = ancients[cardName].allCard.greenCards
   while (greenDesk.length < g) {
      let x = getRandomNum(1, 18)
      if (greenDesk.indexOf(x) == -1) {         // проверим есть оно  у нас или нет 
         greenDesk.push(x);         // записываем в массив т.к нету
      }
   }
}
function pushBrownDesk() {
   let br = ancients[cardName].allCard.brownCards
   while (brownDesk.length < br) {
      let x = getRandomNum(1, 21)
      if (brownDesk.indexOf(x) == -1) {         // проверим есть оно  у нас или нет 
         brownDesk.push(x);         // записываем в массив т.к нету
      }
   }
}
function pushBlueDesk() {
   let bl = ancients[cardName].allCard.blueCards
   while (blueDesk.length < bl) {
      let x = getRandomNum(1, 12)
      if (blueDesk.indexOf(x) == -1) {         // проверим есть оно  у нас или нет 
         blueDesk.push(x);         // записываем в массив т.к нету
      }
   }
}


function getRandomNum(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}


function pushStage() {
   while (stageOne[0].length < ancients[cardName].firstStage.greenCards) 
      stageOne[0].push('/green/green' + greenDesk.pop())
   while (stageTwo[0].length < ancients[cardName].secondStage.greenCards) 
      stageTwo[0].push('/green/green' + greenDesk.pop())
   while (stageThree[0].length < ancients[cardName].thirdStage.greenCards) 
      stageThree[0].push('/green/green' + greenDesk.pop())
      
   while (stageOne[1].length < ancients[cardName].firstStage.brownCards) 
         stageOne[1].push('/brown/brown' + brownDesk.pop())
   while (stageTwo[1].length < ancients[cardName].secondStage.brownCards) 
         stageTwo[1].push('/brown/brown' + brownDesk.pop())
   while (stageThree[1].length < ancients[cardName].thirdStage.brownCards) 
      stageThree[1].push('/brown/brown' + brownDesk.pop())
   
   while (stageOne[2].length < ancients[cardName].firstStage.blueCards) 
         stageOne[2].push('/blue/blue' + blueDesk.pop())
   while (stageTwo[2].length < ancients[cardName].secondStage.blueCards) 
         stageTwo[2].push('/blue/blue' + blueDesk.pop())
   while (stageThree[2].length < ancients[cardName].thirdStage.blueCards) 
      stageThree[2].push('/blue/blue' + blueDesk.pop())
}

let stageOne = [[], [], []];
let stageTwo = [[], [], []];
let stageThree = [[], [], []];


const  st1_g = document.querySelector(".st1-g")
const  st1_br = document.querySelector(".st1-br")
const  st1_bl = document.querySelector(".st1-bl")
const  st2_g = document.querySelector(".st2-g")
const  st2_br = document.querySelector(".st2-br")
const  st2_bl = document.querySelector(".st2-bl")
const  st3_g = document.querySelector(".st3-g")
const  st3_br = document.querySelector(".st3-br")
const  st3_bl = document.querySelector(".st3-bl")

function textStage(){
st1_g.textContent = stageOne[0].length
st1_br.textContent = stageOne[1].length
st1_bl.textContent = stageOne[2].length
st2_g.textContent = stageTwo[0].length
st2_br.textContent = stageTwo[1].length
st2_bl.textContent = stageTwo[2].length
st3_g.textContent = stageThree[0].length
st3_br.textContent = stageThree[1].length
st3_bl.textContent = stageThree[2].length
}


const deck = document.querySelector('.deck')
const last = document.querySelector('.last-card')

deck.addEventListener('click', () => {
   let a
   if ((stageOne[0].length || stageOne[1].length || stageOne[2].length) !== 0) {
      function showCard() {
         let i = getRandomNum(0, 2)
         stageOne[i].length !== 0 ? a = stageOne[i].pop() : showCard();
      }
      showCard()
      st1_g.textContent = stageOne[0].length
      st1_br.textContent = stageOne[1].length
      st1_bl.textContent = stageOne[2].length
   } else
      if ((stageTwo[0].length || stageTwo[1].length || stageTwo[2].length) !== 0) {
      function showCard() {
         let i = getRandomNum(0, 2)
         stageTwo[i].length !== 0 ? a = stageTwo[i].pop() : showCard();
      }
      showCard()
      st2_g.textContent = stageTwo[0].length
      st2_br.textContent = stageTwo[1].length
      st2_bl.textContent = stageTwo[2].length
      } else
         if ((stageThree[0].length || stageThree[1].length || stageThree[2].length) !== 0) {
      function showCard() {
         let i = getRandomNum(0, 2)
         stageThree[i].length !== 0 ? a = stageThree[i].pop() : showCard();
      }
      showCard()
      st3_g.textContent = stageThree[0].length
      st3_br.textContent = stageThree[1].length
      st3_bl.textContent = stageThree[2].length
   }
   
   last.style.backgroundImage = `url('./assets/MyThicCards${a}.png')`

   let remainderCard = stageThree[0].length + stageThree[1].length + stageThree[2].length
         if (remainderCard === 0) { 
            desk.classList.add('visibility')
         } 
})
















































































   // var arr = []                         //записываем в этот массив рандомные числа
   // var max;                              // максимальная длина массива 
   // var rundomnumber;                     //случайное число
   
   //  while (arr.length <= max) {
   
   //         rundomnumber = Math.floor(Math.random() * max); //создадим случайное число
   
   //         if (arr.indexOf(rundomnumber) == -1) {         // проверим есть оно  у нас или нет 
   
   //             arr.push(rundomnumber);         // записываем в массив т.к нету
   //         }
   //     }
   
// console.log(ancients)