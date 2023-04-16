window.addEventListener("load", function(){
    let x = document.querySelector(".x-html5")
    let main = document.querySelector("main")

    x.addEventListener("click", function(){
        main.style.display = "none"
    })
})