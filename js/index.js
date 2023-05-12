//Week 2 Homework | Task One (Task Two is down below)
//Exercise One
let fname = "John";
let surname = "Buckley";
let age = 21;
const subject = "DV100";

console.log("Hello, my name is " + fname + " " + surname + ", I am " + age + " years old and I am studying " + subject + ".");

//Exercise Two
let numOne = 11;
let numTwo = 22;
let numThree = 33;
let numFour = 44;
let answer = 0;

answer = numOne + numTwo/numThree * numFour;
console.log(Math.round(answer));

//Exercise Three
let timmy = 10;
let susan = 25;
let timTax = 0.15;
let susTax = 0.26;
let taxManTotal = 0;

taxManTotal = timmy*timTax + susan*susTax;
console.log(taxManTotal);

//Exercise Four
let students = ["John", "Tim", "Alfie", "Gwen"];
let marksEx4 = [33, 78, 89, 85];
let value = 0;
let avg = 0;

value = marksEx4[0] + marksEx4[1] + marksEx4[2] + marksEx4[3];
avg = value/4;
console.log("Students average = " + avg);

for(let i = 0; i < marksEx4.length; i++){
    marksEx4[i] += 7;
}

value = marksEx4[0] + marksEx4[1] + marksEx4[2] + marksEx4[3];
avg = value/4;
console.log("Updated students average = " + avg);


//Week 3 Homework | Task Two
// From the Array of Names below, write a script to check if there is a user called - Steve
// If Steve is present, update the stevePresent Variable
// Create an IF statement that checks to see if stevePresent is set to true or false
// If True, console log -> "Yes, Steve is present"
// If False, console log -> "No, Steve is not present"

let users = ["Jim", "Mike", "Dave", "Josh", "Tim", "Jane", "Susan", "Haley", "Matthew", "John", "Spencer", "Stephan", "Mable", "Steve", "Jacob", "Ruby", "Adam", "Bruce"];
let stevePresent = false; 

for(let i = 0; i < users.length; i++){
    if(users[i] === "Steve"){
        stevePresent = true;
    }
}

if(stevePresent){
    console.log("Yes, Steve is present");
}else{
    console.log("No, Steve is not present");
}


// The Array below contains a series of computer power watts, each value is one computer.
// Using a FOR loop, calculate the total power of all the computers
// Write and IF Statement that checks to see if there is enough power. 
// If True, console log -> "There is enough power!"
// If False, console log -> "There is Not enough power!"

let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500; 
let totalPower = 0;

for(let i = 0; i < computers.length; i++){
    totalPower += computers[i];
}

if(totalPower <= requiredPower){
    console.log("There is enough power!");
}else{
    console.log("There is Not enough power!");
}

// Console Log all Odd number between 1 & 100 using the modulo operator... 
for(let i = 1; i <= 100; i++){
    if(i%2 != 0){
        console.log(i);
    }
}


// Calculate the Average for te following student marks
// Output the average to the console with the string -> "The Average is"

let marks = [23, 45, 67, 55, 80, 90, 45, 60, 56, 30, 31];
let avgT2 = 0;

for(let i = 0; i < marks.length; i++){
    avgT2 += marks[i];
}

avgT2 /= marks.length;
console.log("The Average is: " + Math.round(avgT2));


// Use the following data 
let ageOne = 23;
let userOne = "Josh";

let ageTwo = 16;
let userTwo = "Jacob";

// Write a Script that checks to see if userOne name is Josh AND that this user is Older than 18
// If True, console log -> "User and Age Match"
// If False, console log -> "User and Age Do Not Match"

if(ageOne >= 18 && userOne === "Josh"){
    console.log("User and Age Match");
}else{
    console.log("User and Age Do Not Match"); 
}


// Write a Script that checks to see if userTwo name is Peter OR that this user is Younger than 18
// If True, console log -> "User is Younger than 18 or is Peter"
// If False, console log -> "User is Younger than 18 and is Not Peter"

if(ageTwo <= 18 || userTwo === "Peter"){
    console.log("User is Younger than 18 or is Peter");
}else{
    console.log("User is Younger than 18 and is Not Peter"); 
}
