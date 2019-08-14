//Intro to primitive data types .. you already know these
let code = "I love to code"; 
console.log(code.toUpperCase()); // returns 'code' in uppercase format

code = code.toUpperCase(); // re-assigns code to an uppercase format
console.log(code);

//practice from lecture

let name = 'Chuck Noland';

let copyofName = name; //copied the string value of 'name' and assigned it to the new value of 'copyofName'

name = 'Wilson'; //re-assign name to a new value: 'Wilson'

console.log('copyofName = ${copyofName}'); // copyOfName is still `"Chuck Noland"` since it was originally copied when the `name` variable was `"Chuck Noland"`.
//copyofName remains unchanged as it has it's own value - to which has been replaced orignally by the value of 'name'

//-------------------------------------------------------

let myHeight = '6,1';
let yourHeight = myHeight;
myHeight = '7,1'; // myHeight becomes re-assigned and yourHeight stays the same

console.log(yourHeight);

//---------------------------------------------------------------------------------------

//function examples

let myVar = 5;

const logger = (val) => {
    console.log('val = ${val}');

    debugger;

    val = 1000; // does myVar change or stay the same? It changes within the function but not the global
    //val becomes the copy of myVar and does not change the global state of myVar, just the 'val' copy
    
    console.log('val = ${val}');
}

logger(myVar);

console.log(myVar, 'after logger fn');

//-------------------------------------------------------------------------------------------------

//object examples - dot notation on primitive types

const obj = {
    a: 'a',
    b: 'b',
  }
  
  console.log(obj.a); // dot notation

//---------------------------------------
  //dot notation on primitives
  let str = "I am not an object";
  let num = 5500;
  
  console.log(`str.toUpperCase() returns ${str.toUpperCase()}`);
  console.log(`str.includes('I') returns ${str.includes('I')}`);
  console.log(`str.padStart(25, 'Z') returns ${str.padStart(25, 'Z')} `);
  console.log(`str.length returns ${str.length}`);
  
  console.log(`num.toString() returns ${num.toString()}`);
  console.log(`num.toFixed(2) returns ${num.toFixed(2)}`);
  console.log(`num.toLocaleString() returns ${num.toLocaleString()}`);

  //String Constructor Example

  const greet = "Good Day";
  const strObj = new String(greet);
  console.log(strObj);
  console.log(typeof strObj);

  