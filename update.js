let id=new URLSearchParams(window.location.search).get("id")
let form=document.querySelector(".form");
let image=document.querySelector(".image");
let photoImage=document.querySelector("image1");
let name=document.querySelector(".name");
let price=document.querySelector(".price");
 fetch(`http://localhost:3000/all/${id}`)
 .then(data=>data.json())
 .then(data=>{
    name.value=data.name;
    image.src=data.img;
    price.value=data.price;
 })
 photoImage.addEventListener('input',(e)=>{
    let file=e.target.files[0]
    if(file){
        let reader=new FileReader();
        reader.readAsDataURL
        reader.onload=(function(){
            image.reader=reader.result;
        })
    }
})

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(photoImage.src!="" && name.value!="" && price.value!=""){
        axios.put(`http://localhost:3000/all`,{
            img:image.src,
            name:name.value,
            price:price.value,
        })
        window.location="index.html"
    }
  
})
