/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Sen: ["Sen", "sans-serif"],
      },
      fontSize: {
        headingPrimary: "56px",
        headingSecondary: "36px",
        titleHeading: "44px",
        blogTitle: "28px",
        blogHeading: "24px",
        paragraph: "16px",
        smallText: "14px",
        btnText: "18px",
      },
      fontWeight: {
        fontRegular: 400,
        fontBold: 700,
        fontBlack: 800,
      },
      colors: {
        bgPrimary: "#F4F0F8",
        bgSecondary: "#232536",
        btnPrimary: "#FFD050",
        boxPrimary: "#FCDDEC",
        boxSecondary: "#FFF5D8",
        purple: "#592EA9",
        mediumGrey: "#6D6E76",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
    },
  },
  plugins: [],
};
