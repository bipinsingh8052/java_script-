let  str="  the developer is good";
let count=0;
// for(let i=0;i<str.length;i++){
//     count++;
//     console.log(str[i]);
// }
// console.log(count);
// console.log(str.length);
// console.log(str);
// let d=str.trim();
// console.log(d);

let input =document.querySelector("#input");
let button=document.querySelector("button");
function btn(){
    
        let hel=document.querySelector(".h1");
        for(let i=0;i<=input.value.length;i++){
            if(input.value[i]===" "){

                count++;
            }
        }
        hel.textContent=count;
        console.log(hel);
        return false;
}
