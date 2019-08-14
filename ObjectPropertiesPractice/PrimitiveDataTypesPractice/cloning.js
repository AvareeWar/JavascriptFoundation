//CLONING 


    //Here we will use slice to create a shallow copy of the array
        //syntax: arr.slice([begin[, end]])


    var animals = ['elephant', 'moose', 'duck','mouse','human'];

    console.log(animals.slice(2)); // will return after 2 indexes in array and return the rest
        //output should be ['duck','mouse','human']

    console.log(animals.slice(1,3));// will return after the first index and end at the 3rd, thus giving us the 2nd and 3rd index of the array
        //output should be ['moose','duck']

    const copyofanimals = animals.slice();
    //creates copy of animals but remember, this is a reference to the original array and since the new copy doesn't have the same 
        //reference to memory it will return false on comparisons

    console.log(animals === copyofanimals); //should return false

    console.log(Object.is(copyofanimals, animals))
    //Returns true if the values are the same value, false otherwise. Similar to the comparison operator above

//SPREAD - can be used to create a shallow clone of an object

const abc = ['a','b','c'];

const de = ['d','e'];

//spread is used on abc and de
const aToe = [...abc,...de]

console.log(aToe);

//or you can do it like this

const a = 'abc';
const aClone = [...a]; // creates an array and populates it with the indexes of each letter fron 'a'

console.log(aClone);

/////////////////////////////
//EXERCISE

// YOUR CODE BELOW

const warm = ['Hawaii', 'Australia'];
const cold = ['Iceland', 'Greenland'];

// create the variables `warmCountries` and `coldCountries`, assign a copy of the warm and cold arrays using the spread operator.
// after the `warmCountries` and `coldCountries` are created, use the code below to compare the arrays to their originals, the expressions should return false.

const warmCountries = [...warm];
const coldCountries = [...cold];

console.log(Object.is(warm, warmCountries));

console.log(cold === coldCountries);


// Use the code below when the `warmCountries` and `coldCountries` variables are created
// console.log(warm === warmCountries); // false - false because warmCountries is a COPY of the warm array
// console.log(cold === coldCountries); // false - false because coldCountries is a COPY of the cold array

