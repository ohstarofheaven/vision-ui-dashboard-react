/* Vision UI Customization for PLAVE */

/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Root Variables */
:root {
  --primary-color: #0ff; /* Holographic Cyan */
  --secondary-color: #ff00ff; /* Neon Magenta */
  --background-color: #0a0a0a; /* Deep Cyberpunk Black */
  --text-color: #fff;
  --glow-effect: 0 0 10px var(--primary-color), 0 0 20px var(--secondary-color);
}

/* Body Styling */
body {
  font-family: 'Orbitron', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  transition: all 0.3s ease-in-out;
}

/* Custom Cursor */
body {
  cursor: url('/assets/cursor-holo.png'), auto;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  text-transform: uppercase;
  text-shadow: var(--glow-effect);
}

/* Links */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: var(--secondary-color);
  text-shadow: var(--glow-effect);
}

/* Buttons */
button {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--text-color);
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: var(--glow-effect);
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px var(--primary-color), 0 0 25px var(--secondary-color);
}

/* Scrollbar Customization */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background: var(--background-color);
}

/* Glitch Animation for Logos and Titles */
@keyframes glitch {
  0% { text-shadow: 2px 2px var(--secondary-color); }
  50% { text-shadow: -2px -2px var(--primary-color); }
  100% { text-shadow: 2px 2px var(--secondary-color); }
}

.glitch-text {
  animation: glitch 1s infinite alternate;
}
