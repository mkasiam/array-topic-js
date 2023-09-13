let first = 5 ;
let second = 7 ;

console.log(first,second);

// This is wrong approach 
// first = second ;
// second = first ;

// This is right approach-1

// const temp = first;

// first = second ;
// second = temp;

// Approach:2(Destructing)
[first , second ] = [second , first];
console.log(first,second);


/* It is called swap. where I have to store the first thing then I can use it . */