addEventListener("load", function(){

const desplegable = document.querySelector(".desplegable-index")
const inicio = document.querySelector("#inicio")
const ds = document.querySelector(".div-proyecto1")





inicio.addEventListener("click", function(){
       
desplegable.style.display = "block"
       
})

desplegable.addEventListener("mousemove", function(){
       
    desplegable.style.display = "block"

})


desplegable.addEventListener("mouseout", function(){
       
            desplegable.style.display = "none"
       
})



ds.addEventListener("dblclick", function(){
    window.location = "/DigitalStore"
})


})




