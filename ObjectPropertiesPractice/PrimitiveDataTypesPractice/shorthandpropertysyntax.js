//////////////////////////////////////////////////
//SHORTHAND PROPERTY SYNTAX

// Challenge: Refactor the bike object to use shorthand syntax
// Note: There aren't test specs for this exercise

//From this 

const wheelTotal = 4;
const color = 'red';


const bike = {
  wheelTotal: 4,
  color: 'red',
  beginPedaling: function() {
    console.log('pedaling!')
  }
}

////////////////////////////////////////////////
//To this


let wheelTotal = 4;
let color = 'red';
function pedaling(){
    console.log('pedaling!');
}

const bike = {
  wheelTotal: wheelTotal,
  color: color,
  pedaling(){console.log('pedaling!')},
}

console.dir(bike);