function del(id){
    let yes=window.confirm("DO you delete the item");
    if(yes){
        fetch(`http://localhost:4000/product/${id}`,{
            method:"DELETE"
        });
    }
    else{
        window.alert("invalid ");
    }
}
function update(id){
    let obj={
        "image":document.querySelector("").value,
        "pname":document.querySelector("").value,
        "bname":document.querySelector(" ").value,
        "price":document.querySelector("").value
    }
    {
        method:"PUT",
        body:JSON.stringify(obj)
    }
}
async function run() {
    let data =await fetch('http://localhost:4000/product');
    let responise=await data.json();
    console.log(responise);
    let table =document.querySelector("table");
    table.innerHTML=responise.map((item)=>`
   <tr>
            <td>${item.id}</td>
            <td><img width="100px" src="${item.image}" alt="ram"></td>
            <td>${item.pname}</td>
            <td>${item.bname}</td>
            <td>${item.price}</td>
            <td><button onclick = "del(${item.id})">Delete</button></td>
            <td><button onclick = "update(${item.id})">Update</button></td>
        </tr>
    `).join(" ");
}