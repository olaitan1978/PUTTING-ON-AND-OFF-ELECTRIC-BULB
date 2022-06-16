let ot= document.getElementById("gim")
let bulbOn=document.getElementById("ond")
let bulbOff=document.getElementById("offd")
let imo =document.getElementById("born")
let imom =document.getElementById("bor")

let seyi = () =>{
    imo.style.display="block"
    imom.style.display="none"
    ot.innerText="UP NEPA!!! SEYI HAS PUT ME ON"
}
bulbOn.addEventListener("click",seyi)

let sey = () =>{
   
    imo.style.display="none"
    imom.style.display="block"
    ot.innerText="DOWN NEPA!!! SEYI HAS PUT ME OFF"
}
bulbOff.addEventListener("click",sey)
