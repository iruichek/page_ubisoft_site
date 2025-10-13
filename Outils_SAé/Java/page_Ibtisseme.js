document.querySelectorAll('.game-card').forEach(card => {
  const videoSrc = card.getAttribute('data-video');
  const img = card.querySelector('img');

  // Crée un élément iframe (pour YouTube)
  const iframe = document.createElement('iframe');
  iframe.src = videoSrc;
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.style.position = 'absolute';
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.borderRadius = '12px';
  iframe.style.opacity = '0';
  iframe.style.transition = 'opacity 0.3s ease';
  iframe.style.border = 'none';

  card.appendChild(iframe);

  // Quand la souris passe sur la carte
  card.addEventListener('mouseenter', () => {
    img.style.opacity = '0';
    iframe.style.opacity = '1';
    // Force le redémarrage de la vidéo YouTube
    iframe.src = videoSrc + '&autoplay=1&mute=1';
  });

  // Quand la souris quitte la carte
  card.addEventListener('mouseleave', () => {
    iframe.style.opacity = '0';
    img.style.opacity = '1';
    // Stoppe la vidéo (reload sans autoplay)
    iframe.src = videoSrc;
  });
});
