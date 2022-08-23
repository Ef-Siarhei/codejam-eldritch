import difficulties from "./data/difficulties.js";
import ancients from "./data/ancients.js"
import cardsBlue from "./assets/MythicCards/blue/blue.js"


const ancient = document.querySelector('.ancient-container')
const azathoth = document.querySelector('.azathoth')
const cthulhu = document.querySelector('.cthulhu')
const iogSothoth = document.querySelector('.iogSothoth')
const shubNiggurath = document.querySelector('.shubNiggurath')

let blueDesk = []
let brownDesk = []
let greenDesk = []

console.log(difficulties)
console.log(ancients)
console.log(cardsBlue)

let cardName
ancient.addEventListener('click', function ({ target }) {
   cardName = [...this.children].indexOf(target)
   blueDesk = []
   brownDesk = []
   greenDesk = []
   pushBlueDesk()
   pushBrownDesk()
   pushGreenDesk()
   console.dir(blueDesk)
   console.dir(brownDesk)
   console.dir(greenDesk)
})

function pushBlueDesk() {
   let bl = ancients[cardName].allCard.blueCards
   while (blueDesk.length < bl) {
      let x = getRandomNum(1, 12)
      if (blueDesk.indexOf(x) == -1) {         // проверим есть оно  у нас или нет 
         blueDesk.push(x);         // записываем в массив т.к нету
      }
   }
}
function pushBrownDesk() {
   let br = ancients[cardName].allCard.brownCards
   while (brownDesk.length < br) {
      let x = getRandomNum(1, 12)
      if (brownDesk.indexOf(x) == -1) {         // проверим есть оно  у нас или нет 
         brownDesk.push(x);         // записываем в массив т.к нету
      }
   }
}
function pushGreenDesk() {
   let g = ancients[cardName].allCard.greenCards
   while (greenDesk.length < g) {
      let x = getRandomNum(1, 12)
      if (greenDesk.indexOf(x) == -1) {         // проверим есть оно  у нас или нет 
         greenDesk.push(x);         // записываем в массив т.к нету
      }
   }
}


// var arr = []                         //записываем в этот массив рандомные числа
// var max;                              // максимальная длина массива 
// var rundomnumber;                     //случайное число

//  while (arr.length <= max) {

//         rundomnumber = Math.floor(Math.random() * max); //создадим случайное число

//         if (arr.indexOf(rundomnumber) == -1) {         // проверим есть оно  у нас или нет 

//             arr.push(rundomnumber);         // записываем в массив т.к нету
//         }
//     }




function getRandomNum(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}




const last = document.querySelector('.last-card')
// last.style.backgroundImage = "url('./assets/MyThicCards/blue/blue1.png')"
last.style.backgroundImage = `url(${cardsBlue.blue1})`

// console.log(ancients)