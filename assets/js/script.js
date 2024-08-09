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


  // COLOCAR UM VIDEO QUANDO O CANAL NAO ESTIVER COM LIVE
  const iframe = document.getElementById('youtubeLive');
  const liveStreamUrl = "https://www.youtube.com/embed/UCxkCm7yG2PwUESmzjlrhoyA";
  const fallbackUrl = "https://www.youtube.com/embed/ScMzIvxBSi4"; // Vídeo de fallback
  const checkInterval = 30000; // Intervalo de verificação em milissegundos (30 segundos)
  
  // Função para definir o src do iframe
  function setIframeSrc(url) {
      iframe.src = url;
  }
  
  // Função para verificar se a transmissão ao vivo está disponível
  // function checkLiveStream() {
  //     fetch(`https://www.youtube.com/oembed?url=${liveStreamUrl}&format=json`)
  //         .then(response => {
  //             if (response.ok) {
  //                 // A transmissão ao vivo está disponível
  //                 setIframeSrc(liveStreamUrl);
  //             } else {
                  // A transmissão ao vivo não está disponível, exibe o fallback
          //         console.log("A transmissão ao vivo não está disponível, exibindo o fallback.");
          //         setIframeSrc(fallbackUrl + "?autoplay=1&loop=1");
          //     }
          // })
          // .catch(() => {
              // Em caso de erro na verificação, exibe o fallback
  //             console.log("Erro ao verificar a transmissão ao vivo, exibindo o fallback.");
  //             setIframeSrc(fallbackUrl + "?autoplay=1&loop=1");
  //         });
  // }
  
  // Verifica a transmissão ao vivo a cada intervalo
  // setInterval(() => {
  //     checkLiveStream();
  // }, checkInterval);
  
  // Inicializa com a URL do vídeo de fallback
  // setIframeSrc(fallbackUrl + "?autoplay=1&loop=1");
  
  // Inicia a verificação
  // checkLiveStream();

//   Explicações
// HTML: Inicializa o iframe com a URL do vídeo de fallback. Isso garante que o fallback será exibido até que a transmissão ao vivo esteja disponível.

// JavaScript:

// setIframeSrc: Função para atualizar o src do iframe.
// checkLiveStream: Tenta acessar a URL da transmissão ao vivo usando uma solicitação fetch ao endpoint de oEmbed do YouTube. Isso ajuda a determinar se a URL está ativa. Se a resposta for bem-sucedida, assume-se que a transmissão ao vivo está disponível. Caso contrário, define o fallback.
// setInterval: Chama checkLiveStream a cada 30 segundos para atualizar a URL do iframe conforme necessário.
// Notas Adicionais
// Restrições de CORS: Usar fetch para acessar o endpoint de oEmbed do YouTube permite verificar se a URL está ativa sem enfrentar problemas de CORS ao tentar acessar diretamente o iframe.
// Fallback: O vídeo de fallback é exibido inicialmente e enquanto a transmissão ao vivo não estiver disponível.
// Essa abordagem deve ajudar a garantir que você exiba um vídeo alternativo enquanto aguarda a transmissão ao vivo, e atualize para a transmissão ao vivo assim que ela estiver disponível.
  