let a =10;
let b=5;
console.log("Arithmetic operators:");
console.log("a=",a,",b=",b);
let sum=a+b;
let differance=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
exponent=a**b;
console.log("Arithmatic operators");
console.log("sum:",sum);
console.log("differance:",differance);
console.log("product:",product)
console.log("remainder:",remainder)
console.log("exponent:",exponent)

console.log("\n");//add a new line
//2 assighment operators
let x=10;
x +=5;
x -=3;
x *=5;
x /=4;
x %=3;
console.log("assignment operators");
console.log("x after assignment",x)
console.log("\n");

//3,comparsion operaors
let isEqual=(a==b);
let isStrictEqual=(a==b);
let isNotEqual=(a!=b);
let isStrictNotEqual=(a!==b);
let isGreaterthan=(a>b);
let islessthan=(a<b);
let GreaterthanorEqual=(a>=b);
let lessthanorequal=(a<=b);
console.log("Comparsion operators:");
console.log("isEqual:",isEqual);
console.log("isStrictEqual:",isStrictNotEqual);
console.log("isGreaterthan:",isGreaterthan);
console.log("islessthan:",islessthan);
console.log("GreaterthanorEqual:",GreaterthanorEqual);
console.log("lessthanorequal:",lessthanorequal);

console.log("/n");
//4 logical operators
let andoperator=(a>0 && b>0);
let oroperator=(a>0 || b<0);
let notoperator=!(a<b);
console.log("Logical operator:");
console.log("AND operator:",andoperator);
console.log("OR operatotor:",oroperator);
console.log("NOT operator:",notoperator);
console.log("/n");

//bitwise operator

let bitwiseAnd=a&b;
let bitwiseOr=a|b;
let bitwiseXor=a^b;
let bitwiseNot=~a;
let leftshift=a<<1;
let rightshift=a>>1;
console.log("Bitwise operator:");
console.log("Bitwise AND:",bitwiseAnd);
console.log("Bitwise Or:",bitwiseOr);
console.log("Bitwise Xor:",bitwiseXor);
console.log("Bitwise NOt:",bitwiseNot);
console.log("leftshift:",leftshift);
console.log("rightshift:",rightshift);
console.log("/n");
//5. Ternary operator
// the  ternary operator  is a shortthand for the if...else statement it takes 
let age=18;
let eligibility=(age>=18)? "Eligible to vote": "not eligible to vote";
console.log("Ternary operator:");
console.log("Eligibility:",eligibility);
console.log("/n")

//7 types of operators
// the "typeof" operator is used to determine the types of variables or value
let variableType=typeof a;
console.log("Typeof operator")
console.log("Type of variable 'a':",variableType);
console.log("\n")
