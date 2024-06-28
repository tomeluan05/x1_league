// QUANDO ROLAR A TELA, O MENU MUDA DE COR
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Ajuste o valor conforme necessário
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });


//   QUANDO CLICAR NA TELA, O BOTAO HAMBURGUER FECHA
  document.addEventListener('click', function(event) {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show') && !navbarToggler.contains(event.target) && !navbarCollapse.contains(event.target)) {
      navbarToggler.click();
    }
  });