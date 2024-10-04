let counter=document.querySelector("span");
let subbtn=document.querySelector(".Sub");
let reset=document.querySelector(".zero");
let addbtn=document.querySelector('.add');
console.log(counter,subbtn,reset,addbtn);
let counting =counter.textContent;
counter.style.padding="10px";
subbtn.addEventListener("click",function(e){
    
    
        counting=counting-1;
        counter.textContent=counting;

});
reset.addEventListener("click",function(){
    counter.innerHTML="0";
    counting=0;
});
addbtn.addEventListener("click",function(e){
    counting++;
    counter.textContent=counting;

})
console.log(addbtn.contains());