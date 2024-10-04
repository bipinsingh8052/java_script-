let button=document.querySelector("button");
let span =document.querySelector("span");
let container=document.querySelector(".container");
console.log(button,span,container);
console.log(Math.floor(Math.random()*5));
let array=["Red","orange",'white','yellow',"green"]
button.addEventListener("click",function(e){
    let color=randomNumber();
    span.innerHTML=`${color}`;
    let colorbg=array[color];
    console.log(colorbg);
    container.style.backgroundColor=`${colorbg}`;
})
function randomNumber(){
    return Math.floor(Math.random()*array.length);
}
