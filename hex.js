const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","f"];

const btn=document.getElementById("btn");

const color =document.querySelector(".color");

btn.addEventListener("click",function()
{
let colorValue="#";
    for(let i=0;i<6;i++)
        {
            colorValue=colorValue+hex[getRandom()];
        }

document.body.style.backgroundColor=colorValue;
color.textContent=colorValue;

});

function getRandom()
{
return Math.floor(Math.random()*hex.length);
}
