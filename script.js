// Header (Menü Çubuğu) Kontrolü
const header = document.getElementById('header');

// Üst bandı index.html'de 5 saniye sonra göster, diğer sayfalarda hemen göster
const currentPath = window.location.pathname;
if (currentPath.endsWith('/index.html') || currentPath === '/') {
    setTimeout(() => {
        header.classList.add("active");
    }, 5000); // 5000 milisaniye = 5 saniye
} else {
    // Diğer sayfalarda header'ı direkt göster
    header.classList.add("active");
}

// Parallax Scrolling (Video ve Logo)
const bgVideo = document.getElementById('bgVideo');
const logoContainer = document.getElementById('logoContainer');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;

  // Video Opaklığını Ayarla
  let videoOpacity = 1 - (scrollPosition / 500); 
  videoOpacity = Math.max(0, videoOpacity); 
  bgVideo.style.opacity = videoOpacity;

  // Logo Opaklığını Ayarla (Kaydırma ile)
  let opacity = 1 - (scrollPosition / 100);
  opacity = Math.max(0, opacity);
  logoContainer.style.opacity = opacity; 

});

// Logo Girişte Yavaşça Belirme
setTimeout(() => {
  logoContainer.style.opacity = 1; 
}, 2000); // 2 saniye sonra logo görünür

const imageBoxes = document.querySelectorAll('.imageBox');
const bgImage = document.getElementById('bgImage'); // Artık imageContainer içinde
const imageContainer = document.getElementById('imageContainer'); // imageContainer'ı seç

imageBoxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    const imgSrc = box.querySelector('img').src;
    bgImage.src = imgSrc;
    bgImage.style.opacity = 1;
  });

  box.addEventListener('mouseout', () => {
    bgImage.style.opacity = 0;
  });
});

const menuItems = document.querySelectorAll('#menu > a');
const headerImage = document.getElementById("headerImage");
const headerHeight = header.offsetHeight;
const imageHeight = headerImage.offsetHeight;

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
        // Header yüksekliğini sıfırla
        header.style.height = 'auto';
        
      // Alt menüyü göster
      submenu.style.display = 'block';

      // Header yüksekliğini ayarla
      const submenuHeight = submenu.offsetHeight;
      
      // Header'ın yeni yüksekliğini ayarla
      header.style.height = Math.max(headerHeight, submenuHeight + imageHeight + 10) + 'px';

    }
    });

    item.addEventListener('mouseout', () => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      // Alt menüyü gizle
      submenu.style.display = 'none';

      // Header yüksekliğini sıfırla
      header.style.height = 'auto';
    }
    });
});