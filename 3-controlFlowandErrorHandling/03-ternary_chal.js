let num = 6;
(num > 0) ? console.log("yes") : console.log("no");
 

let age = 30;
(age >= 25) ? console.log('Yay! you can rent a car') 
: (age >= 21) ? console.log('Yay! you can drink!')
: (age >= 18) ? console.log('Yay! You can vote!')
: console.log("Sorry, you're too young to do anything fun!")


let age1 = 26;
switch (true) {
    case age1 > 24:
        console.log("Yay! You can rent a car!")
    case age1 > 20:
        console.log("Yay! You can drink!")
    case age1 > 17:
        console.log("Yay! You can vote!");
        break;
    default:
        console.log("Sorry, you're too young to do anything fun.");
}


let FB = 7;
(FB % 3 == 0) && (FB % 5 == 0) ? console.log("FizzBuzz")
: (FB % 5 == 0) ? console.log("Buzz")
: (FB % 3 == 0) ? console.log("Fizz")
: console.log("FB not divisible by 3 or 5")
 





for (i = 0; i < 10; i++) {
    console.log(i);
}


for (i = 2; i <20; i+=2) {
    console.log(i);
}

for (i = 10; i >= 0; i-=1) {
    console.log(i);
}


for (i = 0; i >= -24; i-=2) {
    console.log(i);
}


let name = 'Danilo Uy';

for (i= 0; i < name.length; i++) {
    if (name[i] != ' ') {
       console.log(name[i]) }
}
 
let fruit = ['apple','orange'];
for (fruit of fruit) {
    console.log(fruit)
};
 
// make a for loop where you add up all the numbers from 1 t0 50,
// (should equal 1275)

 let sum = 0;
 for (let i = 1; i <= 50; i++) {
    sum += i;
 }
 console.log(sum);
  


let FB1 = 15;
switch (true) {
    case (FB1 % 3 == 0) && (FB1 % 5 == 0):
        console.log("FizzBuzz")
        break;
    case (FB1 % 5 == 0): 
        console.log("Buzz")
        break;
    case (FB1 % 3 == 0):
        console.log("Fizz")
        break;
    default:
        console.log("FB1 no divisible by 3 or 5");
}












 
