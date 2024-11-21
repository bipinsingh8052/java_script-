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
    let c= b.map((v)=>{
        return `
        <tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.age}</td>
            <td>${v.address}</td>
            <td><button onclick = "del('${v.id}')">delete </button></td>
            <td><button>update</button></td>
        </tr>
        `
    }).join(" ");
     document.querySelector("#card").innerHTML=c;  
}



run();


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
