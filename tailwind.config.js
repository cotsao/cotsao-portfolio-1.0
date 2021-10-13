const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        "dove-gray": {
          DEFAULT: "#636363",
          "50": "#D6D6D6",
          "100": "#C9C9C9",
          "200": "#B0B0B0",
          "300": "#969696",
          "400": "#7D7D7D",
          "500": "#636363",
          "600": "#4A4A4A",
          "700": "#303030",
          "800": "#171717",
          "900": "#000000"
        },
        mariner: {
          DEFAULT: "#226EC3",
          "50": "#D3E4F7",
          "100": "#BDD7F4",
          "200": "#92BCEC",
          "300": "#67A2E4",
          "400": "#3B87DD",
          "500": "#226EC3",
          "600": "#1A5698",
          "700": "#133D6C",
          "800": "#0B2541",
          "900": "#040C15"
        },
        iron: {
          DEFAULT: "#D9DBDF",
          "50": "#FFFFFF",
          "100": "#FFFFFF",
          "200": "#FFFFFF",
          "300": "#FFFFFF",
          "400": "#F5F5F6",
          "500": "#D9DBDF",
          "600": "#BDC1C8",
          "700": "#A2A7B0",
          "800": "#868C99",
          "900": "#6C7380"
        }
      },
      gridTemplateColumns: {
       'card': 'repeat(auto-fill, minmax(300px, 1fr))',
       'skills': 'repeat(auto-fill, minmax(24px, 8fr))'
      }
    }
  }
};
