/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
     fontFamily: {
      poppins: "Poppins",
    },
  },
},
  plugins: [],
}
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         poppins: "Poppins",
//     },
//   },
// },
//   plugins: [],
// }
