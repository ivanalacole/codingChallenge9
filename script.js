// 1st Challenge Very Easy 

let min = function (x, y) {
    if(x <= y) {
        return x }
        else {
            return y
        }
    }
    console.log(min(0,6));

// Easy 
let firstName = [`Drew`, `Ivana`, `Ari`] 
       let first = firstNames[2]

let lastName = [`Woods`, `Burton-Thompson`, `Lennox`]
     let last = lastName[2]

let studentAge = [ 24, 24, 30]
     let age = studentAge[2]

console.log(`Hello, my name is ${first} ${last} and I am ${age}`)

// Medium
let userInput = prompt('Pick a number 1-12')
if ( userInput<= 12 && userInput >= 1) {


let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July', 
    'Aug',
    'Sept', 
    'Oct',
    'Nov',
    'Dec', 
]
console.log(months[userInput-1]) 
}
else { 
    alert('Please choose a valid number 1-12')
}

//Hard Challenge
let jerryMass = 45

let tomMass = 8

let jerryHeight = 10

let tomHeight = 9

const tomBMI = tomMass / tomHeight ** 2;
const jerryBMI = jerryMass / (jerryHeight * jerryHeight);
console.log(tomBMI, jerryBMI);

const higherBMI = tomBMI > jerryBMI;
console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`)