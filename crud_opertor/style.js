function del(id)
{
    alert(id);
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
