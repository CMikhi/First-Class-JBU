let name1 = `Alexandrais sailing
             the world`;


function sayHi(name1){
    const heading1 = document.getElementById("text");
    heading1.textContent = `hi, ${name1}`;
}

function Get_firstChar()
{
    name1[0]
    return name1
}

function Get_lastChar()
{
    name1.at[-1]
    return name1
}

function Get_number_of_characters()
{
    name1.length
    return name1
}


function lower()
{
    name1.toLowerCase()
    return name1
}

function CapitalizaCorrectly()
{
    name1.toLowerCase()
    return name1
}

sayHi(name1);
const input_ =document.getElementById('i1');
const e1 = document.getElementById("Q1")

input_.addEventListener("keyup", ()=>{
    let value_ = input_.value;

    e1.textContent = get_lower(value_)
})

//[].at    -------> characters
//.substring() --------> string


//Get_firstchar()
//Get_lastChar()
//Get_lower()
//Get_number_of_characters()
//CapitalizaCorrectly()