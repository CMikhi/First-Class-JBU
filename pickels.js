const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

index = 0
function bgColors(){
    document.getElementById('body').style.backgroundColor=colors[index]
    index++;

    if (index==6)
    {
        index=0;
    }
}

function hide_display(){
    document.getElementById('box').style.display="none";
}