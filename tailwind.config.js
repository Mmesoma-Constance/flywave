/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mdlg: "940px",
        xllg: "1100px",
        lg: "1300px",
      },
    },
  },
  plugins: [],
};
