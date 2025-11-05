// Snow effect for Christmas 2025
(function() {
  'use strict';

  // Create snowflake element
  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // Random size between 3px and 8px
    const size = Math.random() * 5 + 3;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.borderRadius = '50%';
    snowflake.style.backgroundColor = '#fff';
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-10px';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.opacity = Math.random() * 0.8 + 0.2; // 0.2 to 1.0
    snowflake.style.pointerEvents = 'none';
    snowflake.style.zIndex = '9999';
    
    // Random falling speed (slower)
    const speed = Math.random() * 6 + 4; // 4 to 10 seconds (2x slower)
    snowflake.style.transition = `transform ${speed}s linear`;
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100; // -50px to +50px
    
    document.body.appendChild(snowflake);
    
    // Start animation
    requestAnimationFrame(() => {
      snowflake.style.transform = `translate(${drift}px, ${window.innerHeight + 10}px)`;
    });
    
    // Remove snowflake after animation
    setTimeout(() => {
      if (snowflake.parentNode) {
        snowflake.parentNode.removeChild(snowflake);
      }
    }, speed * 1000);
  }

  // Initialize snow effect
  function initSnow() {
    // Create initial snowflakes (3x more)
    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        createSnowflake();
      }, i * 30); // Stagger creation quickly
    }
    
    // Continue creating snowflakes continuously - never stop
    const snowInterval = setInterval(() => {
      // Create multiple snowflakes continuously
      for (let i = 0; i < 3; i++) {
        createSnowflake();
      }
    }, 80); // Create new snowflakes every 80ms for continuous falling
    
    // Ensure interval never stops (safety check)
    if (typeof snowInterval !== 'undefined') {
      // Keep reference to prevent garbage collection
      window.snowInterval = snowInterval;
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSnow);
  } else {
    initSnow();
  }
})();
