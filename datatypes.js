//datatypes in javascript
// data types in js include:

//1.primitive Tyes
// -Number :reprwsents   both integer and floating-point numbers
 //string or double quotes.
 // -boolean:represents a logical entity and can have two 
 // vaalues:true or false
 
 // undefined:A variable that has been declared but not ASSIGNRD VALUES
 
 // -NULL:represents the intentional absence of any object value
  
 // symbol:a unquie and immutablem primitive value,ofenn used as object property keys
 // BIGINT: REpresents integers with arrbitraty precision,useful forr large integers

 //2.Non-primitive Types
 // -object:A collction of propertions,where each propeerty is akey-value pair
 // -Array:A special type of object used top store ordered collection values
 // -Function:A callable object that can be invoked to perform a specific task

 // example of different  data types in js


 // primitive data types
 let number=42;//number
 let string="Hello,world";//string
 let boolean =true;//boolean
 let undefinedvar;//undefined//(not asssigned a value)\
 let nullvar=null;//null
 let symbol=Symbol("unique");//symbol//(unqiue identifier)//ofen used as object property
 let bigintvar=BigInt(123456789012345678901234567890);//used to large integers value 



 //non-primitive datatypes
 let objectvar={key:"value"};//object//
 let objectivar={key:"value"};//object//(collection of key-value pairs)
 let arrayvar=[1,2,3,4,5];//array\
 let functionvar=function(){ return "I am a function";}
 //function //(callable object that performs a specific task)

 let object2={
    //adding mutiple key-value pairs
    name:"jonn",
    age:30,
    isemployed:true,
    hobbies:["reading","gaming","coding"],
 

 }
 console.log("data types in javascript:");
 console.log("Number:",number);
 console.log("string:",string);
 console.log("Boolean:",boolean);
 console.log("undefined:",undefinedvar)
 console.log("Null:",nullvar);
 console.log("symbol:",symbol);
 console.log("BigInt:",bigintvar);
 console.log("object:",objectvar);
 console.log("Arrayvar:",functionvar);
 console.log("object2:",object2);