function del(id)
{
 
    fetch(`http://localhost:3000/STUDENT/${id}`,{
        method:'DELETE'
    })
    .then(re=>{return alert("Deleted sucessfully...!!")});
}


async function run(){
    let a= await fetch ("http://localhost:3000/STUDENT");
    let b= await a.json();
    console.log("kill");
    let c= b.map((v)=>{
        return `
        <tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.age}</td>
            <td>${v.address}</td>
            <td><button onclick = "del('${v.id}')">delete </button></td>
            <td><button onclick ="update('${v.id}') " id="update">update</button></td>
        </tr>
        `
    }).join(" ");
     document.querySelector("#card").innerHTML=c;  
}



run();

async function update(id){
    let a =document.querySelector(".form");
    a.style.display="block";
    let data= await fetch(`http://localhost:3000/STUDENT/${id}`);
    let redata =await data.json();
    let idm=document.querySelector("#id1").value=redata.id;
    let name1=document.querySelector("#name1").value=redata.name;
    let age1=document.querySelector("#age1").value=redata.age;
    let address1=document.querySelector("#address1").value=redata.address;
    console.log(idm,name1,age1,address1);
    fetch("http://localhost:3000/STUDENT",{
        method:"PUT",
        headers:{
            'Content_type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    
}
// let updt=document.querySelector("#update");
// console.log(updt);
function Insertdata(){
    let data ={
        name : document.querySelector("#name").value,
        age : document.querySelector("#age").value,
        address : document.querySelector("#address").value
    }
    console.log(data.name);
    console.log(data.age);
    console.log(data.address);
    fetch("http://localhost:3000/STUDENT",{
        method:"POST",
        headers:{
            'Content_type': 'application/json',
        },
        body:JSON.stringify(data)
    })
    .then(rev=>alert("INserting data!!!!!!"));
}

function Close(){
    let a=document.querySelector(".form");
    a.style.display="none";
    
}

