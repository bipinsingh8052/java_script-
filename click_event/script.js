let a=0.1;
let b=0.4;

console.log(a+b);
let c;
let d;
console.log(c+d);
let click =document.querySelector("button");
let body =document.querySelector("body");
console.log(body);
console.log(click);
let count=0;
click.addEventListener("click",function(e){
   
    if(count == 1)
    {
        body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWm8CIjAjWcm0_0_zBZ91BU5T3hIMk6h5ag&s')";
        count=count-1;
    }
    else{
        body.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOqNk18sY7OPjOslCJp7s_gwH-YLrg2-Wkw&s')";
        count++;
    }
    
})

// click.addEventListener("doubleClick",function(e){

// })