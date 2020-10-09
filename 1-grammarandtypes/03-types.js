let on = true;
console.log(on);
let off = false;
let empty = null;
let undef = undefined;
console.log(on,off,undef);
let precise = 999999999999999;
let rounded = 9999999999999999;
console.log(precise,rounded);
let notQuite = 0.2 + 0.1;
console.log(notQuite);
let numbersArehard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersArehard);
let a = Number('123');
let StringOne = 'I\'m home';
console.log(StringOne);
let StringTwo = "Double Quotes";
let StringThree = 'You can use ${StringTwo}';
console.log(StringThree);
let first = 1050 + 100;
let second = '1050' + '100';
console.log(first,second);
console.log(typeof first,typeof second);
let animal = 'dog';
console.log('I have a ' + animal);

let frodo = {
    race: 'Hobbit',
    rings: 1,
    isShort: true
}
console.log(frodo);

let tacos = ['large',4,true];
console.log(tacos);

let whole_address = {
    firstName: 'Danilo',
    lastName: 'Uy',
    houseNumber: 7119,
    aptNumber: 'F',
    street: 'Caisson St',
    city: 'Indianapolis',
    state: 'IN',
    zipcode: '46256' 
}

console.log(whole_address.firstName + ' ' + whole_address.lastName + ', ' 
  + whole_address.houseNumber + '-' + whole_address.aptNumber + ' '
  + whole_address.street + ', ' + whole_address.city + ', ' + whole_address.state 
  + ' ' + whole_address.zipcode  

);

let myName = 'Danielle';
console.log(myName.length);
console.log(myName.toUpperCase());

let home = 'My home is Fishers';
console.log(home.includes('Fishers'));
  

let sent = 'This sentence will be split into individual parts';
let array = sent.split(" ",99);
console.log('array',array);  


