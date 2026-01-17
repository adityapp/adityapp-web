const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#282a36',
        'terminal-current': '#44475a',
        'terminal-fg': '#f8f8f2',
        'terminal-comment': '#6272a4',
        'terminal-cyan': '#8be9fd',
        'terminal-green': '#50fa7b',
        'terminal-orange': '#ffb86c',
        'terminal-pink': '#ff79c6',
        'terminal-purple': '#bd93f9',
        'terminal-red': '#ff5555',
        'terminal-yellow': '#f1fa8c',
        // Map old names to new palette to avoid breaking code immediately, or update code references.
        // I will map the semantics I used 'terminal-gray' -> comment/current line equivalent
        'terminal-gray': '#6272a4', 
        'terminal-highlight': '#f8f8f2',
      },
      fontFamily: {
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('@tailwindcss/typography'),
  ],
};
