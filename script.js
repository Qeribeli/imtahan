function menu(){
    let f1=document.querySelector(".f1")
    f1.style.display=f1.style.display==='block'?'none':'block';
}
const card=document.querySelector(".card");
function myFuntcion(id){
    fetch(`http://localhost:3000/all`)
    .then(data=>data.json())
    .then(data=>{
        data.forEach(item=> {
        console.log(data);

        card.innerHTML+=`<div class="card2"><img src="${item.img}"><p>${item.name}</p><p>${item.price}</p><a href="details.html?id=${item.id}"><button>Details</button></a><button onclick="delete1(${item.id})">Delete</button><a href="update.html?id=${item.id}"><button>Update</button></a></div>`
    })
})}
myFuntcion();
function delete1(id){
    axios.delete(`http://localhost:3000/all/${id}`)
    window.location.reload();
}

let select=document.querySelector(".select")
select.addEventListenera('change',(e)=>{
    let SortSelect=[...data]
    if(e.target.value="a-z"){
        let sortaz=SortSelect.sort((a,b)=>a.name.localCampre(b.name))
        myFuntcion(sortaz)
    }else if(e.target.value="z-a"){
        let sortza=SortSelect.sort((b,a)=>b.name.localCampre(a.name))
        myFuntcion(sortza);
    }else{
        myFuntcion(data)
    }
})


let search=document.querySelector(".search")
search.addEventListener("input",(e)=>{
    let search1=e.target.toLowerCase()
    if(search1){
        let FilterSearch=data.filter(element=>element.name.toLowerCase().includes())
        myFuntcion(FilterSearch)
    }
})