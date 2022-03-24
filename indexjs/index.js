var element = document.getElementById("animation")
var start = document.getElementById("boton01")
var titulo = document.getElementById("titulo")



    element.addEventListener("animationstart", function(){
        start.style.display = "none"; 
        titulo.style.display = "none";
           
    })
    element.addEventListener("animationend", function(){
        
        element.style.display = "none";
        start.style.display = "flex";
        titulo.style.display = "flex";
    });
    
       
       




   
    
    


