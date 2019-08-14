/*
We expect homeCriteria to be a function 
We expect homeCriteria to return a string
We expect homeCriteria to accept string arguments
We expect homeCriteria to follow the string pattern: 'I am looking for a ${size} bedroom ${type} in ${city}';   
*/


// console.log('test-specs.js');

// //Set the criteria for the function and check that it is indeed a function
// const isFunction = typeof homeCriteria === 'function';

// //check return type of homeCriteria function to string
// const returnTypeIsAString = typeof homeCriteria === 'string';

// //declare and intialize size, type, and city
// const size = "3";
// const type = "apartment";
// const city = "Chicago";

// //set the criteria of size, type, city
// const typeOfArguments = (typeof size === 'string') && (typeof type === 'string') && (typeof city === 'string');

// //set the return of the homeCriteria function
//     //invoke size, typ and city in the return string check
// const returnString = homeCriteria(size, type, city) === 'I am looking for a ${size} ${type} in ${city}';

// //if isFunction is true, we will see true. If it is false it will say false and we will know that we have to improve our test-spec
// console.log('We expect home criteria to be a function ${isFunction}');

// console.log('We expect homeCriteria to return a string: ${returnTypeIsAString}');

// console.log('We expect homeCriteria to accept string arguments: ${typeOfArguments}');

// console.log('We expect homeCriteria to follow the string pattern: I am looking for a ${size} bedroom ${type} in ${city}: ${returnString}');


describe('homeCriteria', function(){
    //use 'it' to identify what we are currently trying to test
    it('is a function', function(){
        //typeof homeCriteria === 'function'; convert this into an expect jasmine(test framework) expression
        expect(typeof homeCriteria).toBe('function');
    })

    //to create a new unit test
    it('returns a string', function(){
        //invoke homeCriteria
        expect(typeof homeCriteria()).toBe('string');
    })

    it('returns a string', function(){
        expect(typeof size && typeof type && typeof city).toBe('string');
    })

})