let a="bipin singh";
 setTimeout(()=>{
    console.log("normal");
 },1000);
 function run (){
    console.log("human being");
 }

 console.log("human");
//  setInterval(run,2000);

function onlybody(){
   console.log("jk");
   setTimeout(()=>{
      let a= document.querySelector(".img");
      let b=document.querySelector(".main");
      a.style.display="none";
      b.style.display="block";
   },3000);
}