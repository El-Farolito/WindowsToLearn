addEventListener("load", function(){

const desplegable = document.querySelector(".desplegable-index")
const inicio = document.querySelector("#inicio")
const img = document.querySelector(".img-inicio")

let contador = 0




inicio.addEventListener("click", function(){
       
desplegable.style.display = "block"
       
})

desplegable.addEventListener("mousemove", function(){
       
    desplegable.style.display = "block"

})


desplegable.addEventListener("mouseout", function(){
       
            desplegable.style.display = "none"
       
})


// inicio.addEventListener("click", function(){


//     if(desplegable.style.display = "block"){
//         desplegable.style.display = "none"
//     }
// })
// inicio.addEventListener("mouseup", function(){
//     desplegable.style.display = "none"
// })




})



// JavaScript code

