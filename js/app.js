var ultimoScrollTop = 0;
window.addEventListener('scroll',function(){
  var navegador = document.getElementById("navegador");
	var accionScroll = document.documentElement.scrollTop;
	if (accionScroll > ultimoScrollTop) {
		navegador.classList.add('nav-small');

			signup.style.transform = "translate(-200px, 0px)";
		for (var i = 0; i < menuList.length; i++) {
			menuList[i].classList.add('scroll-header-color');
			logIn.classList.add('scroll-header-border');
		}
	}
	else if (accionScroll <= 3) {
		navHeader.classList.remove('bg-header');
		logoHeader.setAttribute('src','assets/img/logo-white.png');
		signup.style.transform = "translate(0px, 0px)";

		for (var i = 0; i < menuList.length; i++) {
			menuList[i].classList.remove('scroll-header-color');
		}
		logIn.classList.remove('scroll-header-border');
	}
	ultimoScrollTop = accionScroll;
},false);
