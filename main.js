const colors =["BlueViolet","Coral","#f15025","CornflowerBlue","rgba(133,122,200)","Crimson","DarkGreen","DeepPink","GoldenRod","red","IndianRed","LightBlue","LightSeaGreen","Navy","YellowGreen"];
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

