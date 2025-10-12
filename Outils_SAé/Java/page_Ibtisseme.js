document.querySelectorAll('.game-card').forEach(card => {
    const videoSrc = card.getAttribute('data-video');
    const img = card.querySelector('img');
  
    // Crée un élément vidéo invisible au départ
    const video = document.createElement('video');
    video.src = videoSrc;
    video.preload = 'none';
    video.style.position = 'absolute';
    video.style.top = 0;
    video.style.left = 0;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.borderRadius = '12px';
    video.style.opacity = '0';
    video.style.transition = 'opacity 0.3s ease';
    video.volume = 0.8;
  
    card.appendChild(video);
  
    // Quand la souris passe sur la carte
    card.addEventListener('mouseenter', () => {
      img.style.opacity = '0';
      video.style.opacity = '1';
      video.currentTime = 0;
      video.muted = false; // active le son
      video.play();
    });
  
    // Quand la souris quitte la carte
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.style.opacity = '0';
      img.style.opacity = '1';
    });
  });
