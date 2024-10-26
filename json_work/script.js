function del(id){
    console.log(id);
    let yes=window.confirm("DO you delete the item");
    if(yes){
        fetch(`http://localhost:4000/product/'${id}'`,{
            method:"DELETE"
        });
    }
    else{
        window.alert("invalid ");
    }
}







let uid=null;
async function update(id){

    uid=id;
    let data =await fetch(`http://localhost:4000/product/${id}`);
    let responise=await data.json();
    let upform=document.querySelector("#upform");
    upform.style.display="block";
    document.querySelector("#imgurl").value= responise.image;
    document.querySelector("#pname").value= responise.pname;
    document.querySelector("#bname").value= responise.bname;
    document.querySelector("#pprice").value= responise.price;
   
}

 function finalupdate()
{
    let obj={
        "image":document.querySelector("#imgurl").value,
        "pname":document.querySelector("#pname").value,
        "bname":document.querySelector("#bname").value,
        "price":document.querySelector("#pprice").value
    }
    fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        body : JSON.stringify(obj)
    })
}






function Add(){
    let form =document.querySelector("#addform");
    form.style.display="block";
}
function finaladd()
{
    let obj={
        "image":document.querySelector("#imgurl").value,
        "pname":document.querySelector("#pname").value,
        "bname":document.querySelector("#bname").value,
        "price":document.querySelector("#pprice").value
    }
    fetch(`http://localhost:4000/product/`,{
        method:"POST",
        body : JSON.stringify(obj)
    })
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
            <td><button onclick = "del(${`item.id`})">Delete</button></td>
            <td><button onclick = "update(${item.id})">Update</button></td>
        </tr>
    `
).join(" ");

console.log("hello");
}