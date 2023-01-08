let names = ["To the windoooooow!", "To the wall!", "Till the sweat run down my.........", ";)"]

function arrayLoop(theNames) {
    for(let i = 0; i < theNames.length; i++)
    alert(theNames[i])
}

//arrayLoop(names)

function numbers() {
    alert(3 + 3)
}

let addedText = document.getElementById("text").innerText;
document.getElementById("text").innerText = addedText + " my name is Mike!";

document.getElementById("emptyParagraph").innerHTML = "Nice to meet you!"

let identity = {
    firstName: "Michael",
    lastName: "Pitter",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

identity.fullName()

//arrow function
let hawkeye = (a, b) => {
    let c = 10;
    return a + b + c;
    }
    
    console.log(hawkeye(5, 3))

// arrow function with no brackets    
let zoro = (a, b) => a * b   

console.log(zoro(3, 5))

//function with default value. default value can be reset
const defParam = (a, b = 20) => a * b

console.log(defParam(10))

//switch statement
let month = 4;
let theMonth;
switch (4) {
    case 1:
        theMonth = "January";
        break;
    case 2:
        theMonth = "February";
        break;
    case 3:
        theMonth = "March";
        break;
    case 4:
        theMonth = "April";
        break;
    case 5:
        theMonth = "May";
        break;
    case 6:
        theMonth = "June"
        break;
    default:
        theMonth = "No month";
}

console.log(theMonth)

let grade = 7; 
let school; 
 
//switch statement
switch (grade) { 
  case 1: 
    school = 'Elementary School'; 
    break; 
  case 2: 
    school = 'Elementary School'; 
    break; 
  case 3: 
    school = 'Elementary School'; 
    break; 
  case 4: 
    school = 'Elementary School'; 
    break; 
  case 5: 
    school = 'Elementary School'; 
    break; 
  case 6: 
    school = 'Middle School'; 
    break; 
  case 7: 
    school = 'Middle School'; 
    break; 
  case 8: 
    school = 'Middle School'; 
    break; 
  case 9: 
    school = 'High School'; 
    break; 
  case 10: 
    school = 'High School'; 
    break; 
  case 11: 
    school = 'High School'; 
    break; 
  case 12: 
    school = 'High School'; 
    break; 
  default: 
    school = 'Invalid Entry'; 
} 
 

console.log(school);

//ternary function
function ternary(a) {
    return a > 10 ? 'awesome!' :'not cool'
 }
 
 console.log(ternary(12))

let age = 17
let theirAge = age >= 18 ? 'Adult' : 'Underage'

console.log(theirAge)


let powerLevel = 9000;
let dbz = powerLevel >= 9000 ? 'ITS OVER 9000!!!!' : 'youre weak as hell!'

console.log(dbz)

//spread operator
let portion = [7, 8, 9]

let full = [1, 2, 3, 4, 5, 6, ...portion]

console.log(full)

let firstHalf = ['a', 'b', 'c']
let secondHalf = ['d', 'e', 'f']
let completeLetters = [...firstHalf, ...secondHalf]

console.log(completeLetters)



