document.querySelector("input#lenguaje").value = navigator.language;

document.querySelectorAll("a.botonReserva").forEach( (e)=>{
    e.addEventListener("click",()=>{
        document.querySelector("aside#offcanvas").classList.add("show");
    })
});

document.querySelector("#offcanvas button.close").addEventListener("click",()=>{
    document.querySelector("aside#offcanvas").classList.remove("show");
})