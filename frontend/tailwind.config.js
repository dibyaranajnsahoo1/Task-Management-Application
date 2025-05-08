/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '550px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1468px',
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "nav-color" : "var(--main-nav-color)",
        "border-color" : "var(--main-border-color)",
        "task-bg" : "var(--task-card-color)",
        "priority-color" : "var(--priority-color",
        "priority-color" : "var(--priority-color)",
        "tags-color" : "var(--tags-color)",
      },
      backgroundImage: {
       'to-do-gradient': 'linear-gradient(to right, #f56565, #e53e3e)',          // Red gradient
        'progress-gradient': 'linear-gradient(to right, #f6e05e, #ecc94b)',      // Yellow gradient
        'completed-gradient': 'linear-gradient(to right, #38b2ac, #48bb78)', 
      },
    
    },
  },
  plugins: [ 
    function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow-glow': {
        color: "white",
        textShadow: '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ffffff, 0 0 25px #ffffff',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
  },],
};
