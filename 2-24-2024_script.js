//Look on mdn Web Docs to lookingto other methods and things to do with it
// its changable but youi cant resasign the file
/*const numbers = [2,3,4,10,15,20,33];

//pushes the int to the end
numbers.push(5);

//pops the end off
numbers.pop()

//printing into consle
console.log(numbers);

//arrow functions and callbacks
const answer = numbers.filter((number)=>{
    return number>10;     //remeber the === not == to be exact
})

console.log(answer);

/*Promises
to create a promise is using the promise object
pending, fulfilled, rejected */


//fetching api
const info = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m") //fetching data from the file
    .then((response)=>
        console.log(response.json())
    )

const promise_ = new Promise((resolve, reject)=>{
    const error = true;
    if (!error){
        resolve("hello");
    }
    else{
        reject("bye");
    }
})
console.log(promise_);
promise_.then((value)=>{
    console.log(value);
}).catch(err=>console.log(err));