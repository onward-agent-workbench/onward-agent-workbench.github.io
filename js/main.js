/* SPDX-FileCopyrightText: 2026 OPPO */
/* SPDX-License-Identifier: Apache-2.0 */

// Video play on click
function playVideo(container) {
  var video = container.querySelector('video');
  var btn = container.querySelector('.video-play-btn');
  if (!video) return;

  if (video.paused) {
    video.play();
    if (btn) btn.style.display = 'none';
  } else {
    video.pause();
    if (btn) btn.style.display = 'flex';
  }
}

(function() {
  // Header scroll effect
  var header = document.querySelector('.site-header');
  var scrollThreshold = 80;

  function updateHeader() {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // Scroll-triggered fade-in animations
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });
})();
