function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length;i++){
        const index = numbers[i];
        const element = numbers[index];
        if(element > largest){
            largest = element;
        }
    }

    
return largest;
}

const heights = [220,1501,225,150,25];
const tallest =maxInArray(heights);
console.log(tallest);