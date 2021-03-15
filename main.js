const colors =["blue","green","red","#f15025","lightgrey","rgba(133,122,200)"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");


btn.addEventListener("click",function ()
{
const random=getRandom();
document.body.style.backgroundColor=colors[random];
color.textContent=colors[random];

});

function getRandom()
{
    return Math.floor(Math.random()*colors.length);
}

