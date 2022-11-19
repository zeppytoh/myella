/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "2rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "2rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "2rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "4xl": [
        "2.5rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
      "10xl": [
        "8.5rem",
        {
          lineHeight: "1",
        },
      ],
      "11xl": [
        "9rem",
        {
          lineHeight: "1",
        },
      ],
      "12xl": [
        "9.5rem",
        {
          lineHeight: "1",
        },
      ],
      "13xl": [
        "10rem",
        {
          lineHeight: "1",
        },
      ],
      "14xl": [
        "11rem",
        {
          lineHeight: "1",
        },
      ],
      "15xl": [
        "12rem",
        {
          lineHeight: "1",
        },
      ],
      "16xl": [
        "13rem",
        {
          lineHeight: "1",
        },
      ],
      "17xl": [
        "14rem",
        {
          lineHeight: "1",
        },
      ],
      "18xl": [
        "15rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      backgroundImage: (theme) => ({
        screens: "url('/path-to/image.png')",
      }),
      boxShadow: {
        small: "3px 3px",
        DEFAULT: "5px 5px",
        large: "10px 10px",
      },

      colors: {
        white: "#efede6",
        orange: {
          50: "#FEF0EC",
          100: "#FDE4DE",
          200: "#FAC6B7",
          300: "#F8AB96",
          400: "#F58D70",
          500: "#F3734E",
          600: "#EF4010",
          700: "#B5310C",
          800: "#772008",
          900: "#3E1104",
        },
        green: {
          50: "#E5FAEE",
          100: "#CBF6DE",
          200: "#98ECBC",
          300: "#64E39B",
          400: "#2CD877",
          500: "#1FA95B",
          600: "#198648",
          700: "#136738",
          800: "#0D4525",
          900: "#062213",
        },
        cyan: {
          50: "#f7fcfd",
          100: "#effafb",
          200: "#d8f1f5",
          300: "#c1e9ef",
          400: "#92d9e4",
          500: "#63c8d8",
          600: "#59b4c2",
          700: "#4a96a2",
          800: "#3b7882",
          900: "#31626a",
        },
        yellow: {
          50: "#fffcf7",
          100: "#fff8ef",
          200: "#ffeed7",
          300: "#ffe3be",
          400: "#ffce8e",
          500: "#ffb95d",
          600: "#e6a754",
          700: "#bf8b46",
          800: "#996f38",
          900: "#7d5b2e",
        },
        red: {
          50: "#fff8f8",
          100: "#fff1f1",
          200: "#ffdcdc",
          300: "#ffc7c7",
          400: "#ff9c9c",
          500: "#ff7272",
          600: "#e66767",
          700: "#bf5656",
          800: "#994444",
          900: "#7d3838",
        },
      },
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
       
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
