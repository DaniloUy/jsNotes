function greet() {
    console.log("Hello");
} 
greet();

let say_hi = () => console.log("Hi")

let hello = () => {
    console.log("Hello")    
}
 
let greet_two = function() {
    console.log("Greet again");
}
    
aList = ['Justin', 'Ahman']

function better_print(list_param) {
    console.log(list_param) 
}

better_print(aList);

function var_loop(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
 
var_loop(20);
 
function multi_print(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

function list_print(word_list) {
     for (word in word_list) {
         console.log(word_list[word]);
     }
    // for (word of word_list) {
    //    console.log(word)
    // }
}

list_print(["Justin","Adam","Amy","Joe"])

list_print(list_print);
 
 