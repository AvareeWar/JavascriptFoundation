//OBJECT DATA TYPES

    // mutable

    // Object Literal === object
    // special types of objects
    // Array === object
    // Function === object

//OBJECT LITERALS
    const obj = {};

    //attach properties to the object
    obj.name = 'Scott';

    //using bracket notation
    obj['my' + 'Height'] = '6,1'; // using bracket notation you can pass concatanations like here
        //myHeight (the string value) will be used as a property name on the obj

        //dir allows you to see all the properties that an obj has
    console.dir(obj);

//ARRAY - acts just like objects

    const array = [1,2,3,4,5,6];
    //here we are using bracket notation to add a property onto our array and assign it as "value" ( the word, not the type )
    array['myProperty'] = 'value';
    console.dir(array);

//FUNCTION - acts just like objects

    const func = (val) => {
        console.log(val);
    }

    func.hello = "hello";
    func.bye = "bye";

    console.dir(func);