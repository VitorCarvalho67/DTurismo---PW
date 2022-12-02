volt = document.getElementById("reset");
next = document.getElementById("next");
var input = document.querySelector("#inp");
var btnn = document.querySelector("#pbtn");
blb = document.getElementById("btnl");

var result = input.value;
var resultado = result.split(" ");
var y = resultado.length;
var x;
    
input.addEventListener("keypress", function(e){
    
    if (e.key === "Enter"){

        var result = input.value;
        var resultado = result.split(" ");
        var y = resultado.length;
        var x;

        for (x = 0; x < y ; x++) {
        
        if(resultado[x] == "lugares" || resultado[x] == "Lugares" || resultado[x] == "pontos" || resultado[x] == "locais"){
            location.href = "../lugares/lugares.html";
        
            }else if(resultado[x] == "home" || resultado[x] == "casa"){
            location.href = "../index/index.html";
        
            }else if(resultado[x] == "Caribe" || resultado[x] == "caribe"){
            location.href = "../index/index.html#title1";         

            }else if(resultado[x] == "desconto" || resultado[x] == "preço" || resultado[x] == "Desconto" || resultado[x] == "Preço" || resultado[x] == "promoção" || resultado[x] == "Promoção" || resultado[x] == "pacotes" || resultado[x] == "Pacotes"){
            location.href = "../preço/preço.html";    
            
            }else if(resultado[x] == "Mais" || resultado[x] == "mais" || resultado[x] == "contato" || resultado[x] == "suporte"){
            location.href = "https://www.instagram.com/etecrgs/";    
            }

        } 
    }  
})

btnn.addEventListener("click", () =>{
    
    var result = input.value;
        var resultado = result.split(" ");
        var y = resultado.length;
        var x;

        for (x = 0; x < y ; x++) {
        
        if(resultado[x] == "lugares" || resultado[x] == "Lugares" || resultado[x] == "pontos" || resultado[x] == "locais"){
            location.href = "../lugares/lugares.html";
        
            }else if(resultado[x] == "home" || resultado[x] == "casa"){
            location.href = "../index/index.html";
        
            }else if(resultado[x] == "Caribe" || resultado[x] == "caribe"){
            location.href = "../index/index.html#title1";                
            }else if(resultado[x] == "desconto" || resultado[x] == "preço" || resultado[x] == "Desconto" || resultado[x] == "Preço" || resultado[x] == "promoção" || resultado[x] == "Promoção" || resultado[x] == "pacotes" || resultado[x] == "Pacotes"){
            location.href = "../preço/preço.html";    
            }else if(resultado[x] == "Mais" || resultado[x] == "mais" || resultado[x] == "contato" || resultado[x] == "suporte"){
            location.href = "https://www.instagram.com/etecrgs/";    
            }

        } 
})

blb.addEventListener("click", () =>{
    
    if(anside.classList.contains("fechado") || anside.classList.contains("i")){
        anside.classList.add("aberto");
        anside.classList.remove("fechado");
        anside.classList.remove("i");
        
    }
    else if(anside.classList.contains("aberto")){
        anside.classList.add("fechado");
        anside.classList.remove("aberto");
    }
})


next.addEventListener("click", () =>{

    if(main.classList.contains("main-1")){
        main.classList.add("main-2");
        main.classList.remove("main-1");
    }
    else if(main.classList.contains("main-2")){
        main.classList.add("main-3");
        main.classList.remove("main-2");
    }
    else{
        main.classList.add("main-1");
        main.classList.remove("main-3");
        }
    }
)

volt.addEventListener("click", () =>{

    if(main.classList.contains("main-1")){
        main.classList.add("main-3");
        main.classList.remove("main-1");
    } 
    else if(main.classList.contains("main-3")){
        main.classList.add("main-2");
        main.classList.remove("main-3");
    }
    else{
        main.classList.add("main-1");
        main.classList.remove("main-2");
        }
    }
)