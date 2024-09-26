let a=document.querySelector("button");
let b=document.querySelector("img")
a.addEventListener("click",function(e){
    console.log(b.src);
    b.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AccA6_Q20d5xRUmH0Oe-vQ0XfHEk9enITA&s";
    let ul =document.querySelector("ul");
    ul.type="square";
})

function run(){
    b.style.transition=" all 5s ease-in 5s" ;
    b.style.transform="scale(1)";
    b.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1AccA6_Q20d5xRUmH0Oe-vQ0XfHEk9enITA&s";
}
function stop(){
    b.style.transition=" all 5s ease-in 5s" ;
    b.style.transform="scale(1)";
    b.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOfbpKwLRP91JD52SV4ptdAUSqhcFcFYjDg&s";
}