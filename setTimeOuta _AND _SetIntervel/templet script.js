function card(){
    let d=' <section id="card>'
}

// window.alert 
// document
// .querySelector

// let h1=document.querySelector("h1");
// let value=0;
// let array=['a','d','e','g','h'];
// setInterval(run,1000)
// let cont=0;
// function run(){

//     value=array[cont];
//     console.log(value);
//     cont++;

// }

// console.log(h1.textContent=value);
// let sum =`${h1}+" "+${value}`;
// console.log(sum);

let counter=0;
function slider(){
    setInterval(run,2000);
    function run(){
        let container=document.querySelector(".con");
        let first=document.querySelector("article");

        let second=document.querySelector("#second");
        let third=document.querySelector("#third");
        console.log(first,second,third);
        if(counter==0){
            first.style.marginLeft="-1000px";
            first.style.transition="margin-left 1s";
            counter++;
        }
        else if(counter==1){
            first.style.marginLeft="-2000px";
            first.style.transition="margin-left 1s";
            counter++;
        }
        else if(counter==2){
            first.style.marginLeft="-1000px";
            first.style.transition="margin-left 1s";
            counter++;
        }

        else if(counter==3){
            first.style.marginLeft="0px";
            first.style.transition="margin-left 1s";
            counter=0;
        }
        // else if(counter==4){
        //     // first.style.marginRight="2000px";
        //     first.style.marginRight="1000px";
        //     first.style.transition="marginRight 10s";
        //     counter++;
        // }
    }
}