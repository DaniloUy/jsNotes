let apples = x => console.log(`There are ${x} apples`);
apples(10);

let name = fName => {
    return 'Finn'
} 

let myName = name();
console.log(myName);


function calc_tip_amt(bill_amt,tip_pct) {
    bill_amt_fix = bill_amt.toFixed(2)
    tip_amt = bill_amt_fix * (tip_pct / 100);
    tip_amt_fix = tip_amt.toFixed(2)
    console.log("bill amount = " + bill_amt);
    console.log("% tip = " + tip_pct + "%");
    console.log("tip amount = " + tip_amt_fix);
    return tip_amt_fix;    
    }; 

let Tip_Amt = calc_tip_amt(85.333,19);
console.log(Tip_Amt);
 
function capitalizeName(name) {
  let capName = '';
  for (l in name) {
    if (l == 0) {
       capName += name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    } 
    }
  return capName;  
  }

  console.log(capitalizeName('daNieLlE'));
   

 


