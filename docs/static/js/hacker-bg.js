window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hacker-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Hacker Yellow colors: varying shades of cyber gold/yellow
  const colors = [
    'rgba(241, 196, 15, 0.95)',  // Base Cyber Yellow
    'rgba(243, 156, 18, 0.95)',  // Deep Golden Orange
    'rgba(255, 215, 0, 0.95)',    // Bright Gold
    'rgba(245, 176, 65, 0.95)',  // Light Warm Yellow
    'rgba(248, 196, 113, 0.95)'  // Pale Golden
  ];
  
  // Matrix falling characters: binary & security-related keywords
  const characters = "0101010101010101010101010101SQUEAKCLOUDSHADOWADMINOPSECIAMRBACGCPJSONAUDIT";
  
  const fontSize = 14;
  const columns = Math.floor(width / fontSize);

  // Initialize drops at random starting heights to prevent them falling in a single line initially
  const rainDrops = Array.from({ length: columns }, () => Math.floor(Math.random() * -100));

  const draw = () => {
    // Semi-transparent black matching neutral-900 background to create trail effect
    ctx.fillStyle = 'rgba(5, 5, 5, 0.08)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      // Pick a random character
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      
      // Select a random hacker yellow shade
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      
      // Draw character
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      // Reset drop to the top with random delay once it passes the screen height
      if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 33);
});
