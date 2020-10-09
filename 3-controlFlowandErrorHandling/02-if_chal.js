let name = 'Don';

if (name == 'Dan') {
    console.log('Dan');
} else {
    console.log('What is your name?');
};

if (name == 'Don') {
    console.log('Hello my name is ' + name + '!');
} else {
    console.log('Is your name ' + name + '?');
};

let newName = 'zAcHaRy';


if (newName[0] == newName[0].toUpperCase()) {
    console.log(newName);
} else {
    console.log("hey this isn't written correctly")
};



if (newName[0] == newName[0].toLowerCase()) {
    console.log(newName.slice(1).toUpperCase());
} else {
    console.log("hey this isn't written correctly")
};
 

let weather = 75;

if (weather < 70) {
    console.log('wear a jacket');
} else {
    console.log('no jacket necessary!');
};       


let fruit = ['apple', 'orange'];
let apple = fruit[0];

console.log(apple); 

// Dot notation:
let student = {
    name: 'Justin',
    grade: 12
};
console.log(student.name);

let names = [
    "Justin",
    "Danielle"
];
 
console.log(names[1]);



let name2 = 'zAchARy';
if (name2[0] == name2[0].toUpperCase()) {
    let isUppercase = name2[0] + name2.slice(1).toLowerCase();
    console.log('console log #1:', isUppercase)
} else {
    let notUppercase = name2.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUppercase);
};

let officeCharacter = "Pam";
console.log('Sorry $[officeCharacter]');




 
  


 