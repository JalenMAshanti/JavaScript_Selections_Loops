console.log("EXERCISE 1:\n==========\n");

for(let i = 0; i<101; i++){
    
    if(i % 2 != 0){
        console.log(i);
    }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for(let i = 1; i< 101; i++){
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + 'FIZZBUZZ');
    }
    else if(i % 3 == 0){
        console.log(i + 'FIZZ');
    }
    else if( i % 5 == 0){
        console.log(i+ 'BUZZ');
    }
    else{
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3: WHILE LOOP\n==========\n");

let j = 0

while(j < 100){
     j++
    console.log(j);
}

// Exercise 3A Section
console.log("EXERCISE 3A: DO-WHILE LOOP\n==========\n");

let k = 1

do{
   
    if(k % 3 == 0 && k % 5 == 0){
        console.log(k + 'FIZZBUZZ');
    }
    else if(k % 3 == 0){
        console.log(k + 'FIZZ');
    }
    else if(k % 5 == 0){
        console.log(k+ 'BUZZ');
    }
    else{
        console.log(k);
    } 
    k++

}while(k < 100);

    // Exercise 4 Section
console.log("EXERCISE 4: FIND VALUE\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let foundValue = false;

console.log("VALUE: "+ value);
console.log("RANGE: 1-"+ n);

for(let index = 0; index < n; index++){

    console.log(index)

    if(index == value){     
        console.log(index) 
        foundValue = true;
        break;
    }else{
        console.log(index)
    }
    
}

if(foundValue = false){
    console.log('Did not find value')
}else{
    console.log('Found Value');
}

    // Exercise 5 Section
    console.log("EXERCISE 5: BONUS\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let s = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(`FIZZ DIVISOR: ${fizzDivisor} \nBUZZ DIVISOR ${buzzDivisor}\nRANGE: ${start} - ${s}`)


for(let Index = start; Index < s; Index++){
    if(Index % buzzDivisor == 0 && Index % fizzDivisor == 0){
        console.log(Index + 'FIZZBUZZ');
    }
    else if(Index % fizzDivisor == 0){
        console.log(Index + 'FIZZ');
    }
    else if(Index % buzzDivisor == 0){
        console.log(Index + 'BUZZ');
    }
    else{
        console.log(Index);
    } 
}