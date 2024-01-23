let id=new URLSearchParams(window.location.search).get("id")
let form=document.querySelector(".form");
let image=document.querySelector(".image");
let photoImage=document.querySelector(".image1");
let name=document.querySelector(".name");
let price=document.querySelector(".price");
let submit=document.querySelector(".submit")
let pName=document.querySelector(".pName");
let pPrice=document.querySelector(".pPrice")
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

    console.log({
        img:image.src,
        name:name.value,
        price:price.value,
    });

    if(image.src!="" && name.value!="" && price.value!=""){

        axios.post(`http://localhost:3000/all`,{
            img:image.src,
            name:name.value,
            price:price.value,
        })
        window.location="index.html"
    }else if( name.value!=""){
        
        pPrice.style.display="block"
    }else if( price.value!=""){
        pName.style.display="block"
    }
  
})

