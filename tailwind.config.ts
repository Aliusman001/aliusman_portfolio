import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FD853A",
        'dark-primary': "#FB6514",
        lightBlack: "#171717",
        darkgray: "#1D2939",
        secondary: "#344054",
        lightGray: "#98A2B3",
        //HireMe
        lighterBlue: "#F2F4F7",
        text: "#98A2B3",
        border: "#E4E7EC",
        //footer
        footer: "#272727"

      },
      fontSize: {
        xxlarge: "5.9375rem",//95px
        xlarge: "4rem",//64px
        large: "3rem",//48
        medium: "2.5rem",//40px
        regular: "2.25rem",//36px
        normal: "2rem",//32px
        small: "1.5625rem",//25px
        xsmall: "1.25rem",//20px
      },

      maxWidth: {
        'screen': '1900px',
      },
      lineHeight: {
        xxlarge: "8.5625rem",
        xlarge: "4.625rem",
        large: "3.6rem",
        medium: "3.825rem",
        regular: "2.875rem",
        normal: "2.625rem",
        small: "2.1875rem",
        xsmall: "1.875rem",
      },
      padding: {
        'content-spacing': '56px',
      },
      margin: {
        'content-spacing': '56px',
      },
      transitionTimingFunction: {
        'light-bounce': 'cubic-bezier(0.175, 0.885, 0.22, 1.275)',
      },
      screens: {
        'custom-breakpoint': { min: '1026px', max: '1199px' },
        '766-780': { min: '766px', max: '780px' },
        '1024-1347': { min: '1024px', max: '1347px' },
        '1003-1273': { min: '1003px', max: '1273px' },
        '1025-1170': { min: '1025px', max: '1170px' },
      }
    },
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      addBase({
        ':root': {
          '--primary': theme('colors.primary'),
        },
      });
    },
  ],
};
export default config;
