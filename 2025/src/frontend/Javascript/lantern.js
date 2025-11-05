// Lantern (天燈) effect for Christmas 2025
(function() {
  'use strict';

  // Create lantern element
  function createLantern() {
    const card = document.querySelector('.card');
    if (!card) return;
    
    // Create SVG element for lantern
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    
    // Lantern size (smaller for card)
    const size = Math.random() * 20 + 25; // 25px to 45px
    lantern.style.width = size + 'px';
    lantern.style.height = size * 1.2 + 'px'; // Slightly taller
    lantern.style.position = 'absolute';
    lantern.style.bottom = '-50px';
    lantern.style.left = Math.random() * (500 - size) + 'px'; // Card width is 500px
    lantern.style.opacity = Math.random() * 0.4 + 0.6; // 0.6 to 1.0
    lantern.style.pointerEvents = 'none';
    lantern.style.zIndex = '10';
    lantern.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 30px rgba(255, 140, 0, 0.6))';
    
    // Option 1: Use external SVG file (recommended)
    // Place your SVG file in src/frontend/Assets/ and update the path below
    const useExternalSVG = false; // Set to true to use external SVG file
    const svgFilePath = 'images/lantern.svg'; // Path to your SVG file
    
    if (useExternalSVG) {
      const img = document.createElement('img');
      img.src = svgFilePath;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      lantern.appendChild(img);
    } else {
      // Option 2: Use inline SVG (default)
      // You can replace the path 'd' attribute with your own SVG path
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      svg.setAttribute('viewBox', '0 0 100 120');
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // Default SVG lantern shape - replace this path with your custom SVG path
      const lanternPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      lanternPath.setAttribute('d', 'M 50 10 Q 30 10 20 30 L 20 80 Q 20 100 40 100 Q 50 110 60 100 Q 80 100 80 80 L 80 30 Q 70 10 50 10 Z');
      lanternPath.setAttribute('fill', 'url(#lanternGradient' + Date.now() + ')'); // Unique ID
      
      // Create gradient definition
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
      const gradientId = 'lanternGradient' + Date.now();
      gradient.setAttribute('id', gradientId);
      gradient.setAttribute('cx', '30%');
      gradient.setAttribute('cy', '30%');
      
      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('stop-color', '#fff5d6');
      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '50%');
      stop2.setAttribute('stop-color', '#ffd700');
      const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop3.setAttribute('offset', '100%');
      stop3.setAttribute('stop-color', '#ff8c00');
      
      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      gradient.appendChild(stop3);
      defs.appendChild(gradient);
      
      // Update path to use correct gradient ID
      lanternPath.setAttribute('fill', 'url(#' + gradientId + ')');
      
      svg.appendChild(defs);
      svg.appendChild(lanternPath);
      
      lantern.appendChild(svg);
    }
    
    // Random rising speed
    const speed = Math.random() * 3 + 4; // 4 to 7 seconds
    lantern.style.transition = `transform ${speed}s linear`;
    
    // Random horizontal drift (within card) - more random
    const drift = (Math.random() - 0.5) * 200 + (Math.random() - 0.5) * 100; // More random: -150px to +150px
    const riseHeight = 500 + 50; // Card height is 500px, rise above it
    
    card.appendChild(lantern);
    
    // Start animation
    requestAnimationFrame(() => {
      lantern.style.transform = `translate(${drift}px, -${riseHeight}px)`;
    });
    
    // Remove lantern after animation
    setTimeout(() => {
      if (lantern.parentNode) {
        lantern.parentNode.removeChild(lantern);
      }
    }, speed * 1000);
  }

  // Initialize lantern effect
  function initLantern() {
    // Create initial lanterns (2x more)
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createLantern();
      }, i * 800); // Stagger creation more quickly
    }
    
    // Continue creating lanterns continuously (2x more frequent)
    const lanternInterval = setInterval(() => {
      // Create 2 lanterns at once
      createLantern();
      createLantern();
    }, 1500); // Create new lanterns every 1.5 seconds (2x more frequent)
    
    // Ensure interval never stops (safety check)
    if (typeof lanternInterval !== 'undefined') {
      window.lanternInterval = lanternInterval;
    }
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLantern);
  } else {
    initLantern();
  }
})();
