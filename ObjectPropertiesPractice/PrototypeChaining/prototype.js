//PROTOTYPE CHAINING
    //[[Prototype]]

    //data types have built in methods to call

const snacks = {
    fruit: 'banana',
    tastyTreats: ['carrot cake', 'M&Ms']
};

//when you call toUpperCase on fruit, an object wrapper is created for fruit so that it can be translated into uppercase
    //this goes for all data types
console.log(snacks.fruit.toUpperCase());
    //toUpperCase is just an example of a hidden property that all objects and data types have

console.log(snacks.tastyTreats.join(' '));
    //The array.join() method is an inbuilt function in JavaScript which is used to join the elements of an array into a string.The elements of the string will be separated by a specified separator and its default value is comma(, ).
    // Syntax:
    // array.join(separator)

//We are exploring the hidden property known as the prototype property

console.log(Object.getPrototypeOf(snacks.fruit));
    //Returns the prototype of an object.
    //@param o — The object that references the prototype.
        //returns string because fruit is intitialized as a string

//How to see this in chrome dev tools
console.dir(snacks.tastyTreats);
    //shows items in array, the length(2), and __proto__: Array (0)
        //__proto__ can be a mouthfull to say(underscore underscore proto underscore underscore)
        //instead the javascript community has coined the term "Dunder" for the underscores
        //so "Dunder proto" instead

console.log(Object.getPrototypeOf(snacks.tastyTreats));



//From notes
const helloWorld = 'Hello World';

helloWorld.myCustomProperty = 'myProperty';

console.log(helloWorld);


//-------------------------------------------------------------------------

//OBJECT-CREATE

const twitterUserInternalPrototype = {
    login(){
        console.log('I am logged in ');
    },
    logout(){
        console.log('I am logged out');
    }
}

//create the object literal - omitted to make new twitterUser that connects to twitterUserInternalPrototype object
// const twitterUser = {
//     handle: '@avareewarrick',
//     followers: 99999
// }

//we want twitterUser to have access to the first step in its prototype chain so we need to get direct access to the other obj
const twitterUser = Object.create(twitterUserInternalPrototype)

//using dot notation we can add properties to twitterUser even after its been created as an object of twitterUserInternalPrototype
twitterUser.handle = 'AvareeWarrick';
twitterUser.followers = '100';

console.dir(twitterUser);
//notice when printed to the console, it returns the two properties and a built in prototype (Object)

twitterUser.login();
twitterUser.logout();

//we want to sync the twitter user object to the 'twitterUserInternalPrototype' object to give it access to the functions
//the goal is to create a twitter user that is linked to the object below
//We can achieve this goal by using the command Object.create

const myObject = Object.create({name:'Avaree'});// returns and creates a new object
    //also assigns the objects internal prototype as the object we pass in as the argument
//creates new object and assigns it to the const myObject
    //has a required argument and the argument needs to be an object literal {}
console.dir(myObject);

console.log(myObject.name); //checks itself for a name property, doesn't have it and steps up one more its prototype chain 


//twitterUser.login();

