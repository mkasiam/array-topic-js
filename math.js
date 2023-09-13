/* to Power 
something
 up */ 

// const result = Math.pow(2,3);

// console.log(result);


/* Using Math.abs() for absolute value */

// const num1 = 25;
// const num2 = 35;

// const result = Math.abs(num1 - num2);
// console.log("Your age gap are:",result);

// if(result <= 10){
//     console.log("So, You guys can hang out")
// }
// else{
//     console.log("So,You guys stay apart")
// }

/* Using math round in js */

const number = 2.556;

const fullNumber = Math.round(number);

console.log(fullNumber);

// using ceil(It's give the higher value) and floor(It's give the lower value of the input)
const num3 = 4.556;
const result = Math.ceil(num3);
console.log(result);

const num4 = 6.7777;
const result2 = Math.floor(num4);
console.log(result2);

// Use random in js 

console.log(Math.random()*10)
/* when I want random number in any range I just have to multiply the number with What I want */

const random =Math.round( Math.random()*2000);//When I need full number
console.log(random);