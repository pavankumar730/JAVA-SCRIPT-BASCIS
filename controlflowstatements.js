let age=18;
if (age<18){
    console.log("you are a minor")

}
else if (age>=18 && age <65){
    console.log("you are an adult")

}
else{
    console.log("you are a senior citizen")

}
console.log("/n")

//example of switch statement
let day=3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day")

}
console.log("/n")
// LOOPS

for (let i=0; i<5; i++){
    console.log("iteration:",i);

}
console.log("/n");

let j=0;
while(j<5){
    console.log("while loop iteration",j);
    j++;
}

console.log("/n");
let k=0;
do{
    console.log("Do..while loop iteration",k)
    k++;
}
while(k<5);
   