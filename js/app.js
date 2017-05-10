var ultimoScrollTop = 0;
window.addEventListener('scroll',function(){
  var navegador = document.getElementById("navegador");
  if(document.body.scrollTop> 15 || document.documentElement.scrollTop > 15){
    navegador.classList.add("nav-small");
    console.log(scroll);
  }
  else{
    navegador.classList.remove("nav-small");
  }

});
var portafolio = document.getElementById("portafolio");
var nosotros = document.getElementById("nosotros");
var contacto = document.getElementById("contacto");
