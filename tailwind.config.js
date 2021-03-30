module.exports = {
  purge: {
    content: [
      './src/**/*.njk',
      './src/**/*.js',
      './src/**/*.svg',
      './src/**/*.md',
    ],
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif;',
      },
      colors: {
        primary: "var(--font-color)",
        link: "var(--link-color)",
      }
    },

  }
};
