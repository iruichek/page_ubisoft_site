document.querySelectorAll('.game-card').forEach(card => {
  const videoURL = card.getAttribute('data-video');
  const img = card.querySelector('img');

  // Crée un iframe YouTube (invisible au départ)
  const iframe = document.createElement('iframe');
  iframe.src = videoURL;
  iframe.allow = "autoplay; encrypted-media";
  iframe.frameBorder = "0";
  iframe.style.position = 'absolute';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.opacity = '0';
  iframe.style.transition = 'opacity 0.4s ease';
  iframe.style.borderRadius = '12px';

  card.appendChild(iframe);

  // Au survol → affiche la vidéo
  card.addEventListener('mouseenter', () => {
    img.style.opacity = '0';
    iframe.style.opacity = '1';
  });

  // Quand la souris quitte → remet l'image
  card.addEventListener('mouseleave', () => {
    iframe.style.opacity = '0';
    img.style.opacity = '1';
  });
});
