let  str="  the developer is good  ";
let count=0;
// when you replace the string method 
console.log(str.replaceAll(" ",""))
// when you check this in input the find it
console.log(str.includes(" "))
// when you find the peace of code
console.log(str.slice(3,8));
// delete the first space and last space
console.log(str.trim())
console.log(str)
// 
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
