const five = 5;
const cinco = five;
//a copy of 'five' is created

const firstGraders = [
    'avaree',
    'harry',
    'sam',
    'david'
];

const secondGraders = firstGraders;// here secondGraders becomes a reference to firstGraders, in which both arrays will be updated
secondGraders.push('kathleen','benji')     //-- push adds to the array (in this case both arrays)

//to let firstGraders be copied we would need this instead
let firstGraderss = [
    'avaree',
    'harry',
    'sam',
    'david'
];

let secondGraderss = firstGraderss;// here secondGraders becomes a reference to firstGraders, in which both arrays will be updated
secondGraderss.push('kathleen','benji')     //-- push adds to the array (in this case both arrays)

/////////////////////////////////////////////////////////////////////////////////////////////////
//Object Assignment

const healthyFoods = {
    vegetable: 'carrot',
    snack: 'nuts',
    fruit: 'apple'
  };
  
  const deliciousFoods = {
    hungry: 'Cheeseburger',
    veryHungry: 'Pizza',
    dessert: 'Cheesecake'
  }
  
  //combines both food objects together into another object
  let foods = Object.assign(healthyFoods, deliciousFoods);
  
  console.dir(foods);

  // Use the "foods" object as the target object and "merge" the deliciousFoods and healthyFoods properties into the foods object
// the foods object should have the following properties and values:
/*
{
  vegetable: 'carrot',
  snack: 'nuts',
  fruit: 'apple',
  hungry: 'Cheeseburger',
  veryHungry: 'Pizza',
  dessert: 'Cheesecake'
};

The ordering of properties may vary
*/
  