blb = document.getElementById("btnl");
bl = document.getElementById("anside");
var btnn = document.querySelector("#pbtn");

var input = document.querySelector("#inp");
var result = input.value;
var resultado = result.split(" ");
var y = resultado.length;
var x;
    
var n = 0;
var n1 = 0;
var a = 0;
var c = 0;
var total;

s = n + n1;

totali.innerText = "";
numero.innerText  = n;
pa.innerText = a;
pc.innerText = c;

function aumentar (){
    if(s<8 ){
        n = n + 1;
        numero.innerText  = n;
        a = (n*115.75);
        total = c + a;
        totali.innerText = "";
        pa.innerText = " " + a + " ";
    }

    s = n + n1;
}

function diminuir (){
    if(n>0){
        n = n - 1;
        numero.innerText  = n;
        a = (n*115.75);
        total = c + a;
        totali.innerText = "";
        pa.innerText = " " + a + " ";
    }
        s = n  + n1;
   }

   

   numero2.innerText  = n1;
   
   function aumentar2 (){
       if(s<8){
           n1 = n1 + 1;
           numero2.innerText  = n1;
           c = (n1*67.25);
           total = c + a;
           totali.innerText = "";
           pc.innerText =  " " + c + " ";
       }
       s = n  + n1;
   }
   
   function diminuir2 (){
       if(n1>0){
           n1 = n1 - 1;
           numero2.innerText  = n1;
           c = (n1*67.25);
           total = c + a;
           pc.innerText = " " + c + " ";
           totali.innerText = "";
       }
       s = n  + n1;
      }
    
    function calcular(){
        totali.innerText = "Total R$" + total;
    }
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
