//alert("hi")       //---puts alerts on the website
//changes things by being called by tag/Id
document.getElementsByTagName("h2").textContent="hi";
document.getElementById("hello").textContent="hello";

let text_options = ['Great', 'Nuh uh', 'ur weird', 'ping-pong champions']

//creating a fuction
function printHere(){
    let text_hello = document.getElementById("hello").textContent;
    //if/else statements!! als0 == is similar, === is exact
    if(text_hello =="yay"){
       // console.log("HELLO WORLD!!!!!!!!!");
        document.getElementById("hello").textContent="bye";
    }
    
    else{
        document.getElementById("hello").textContent="yay";
    }
}

const colors = ['red', 'yellow', 'blue']
let index = 0;

function bgColorChange(){

    document.getElementById('body').style.backgroundColor=colors[index]
    index++;

    if (index==3)
    {
        index=0;
    }

}



//calling function is same as 
