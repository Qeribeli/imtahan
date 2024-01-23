let id =new URLSearchParams(window.location.search).get("id")
let card=document.querySelector(".n1")
fetch(`http://localhost:3000/all/${id}`)
.then(data=>data.json())
.then(data=>{
    card.innerHTML+=`<div class="n2"><img src="${data.img}"><p>${data.name}</p><p>${data.price}</p></div>`
})