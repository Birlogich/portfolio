/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ordinary: "var(--ordinary-color)",
        "section-title-color": "var(--section-title)",
        "section-subtitle-color": "var(--section-subtitle)",
        "card-title-color": "var(--card-title-text)",
        "link-color": "var(--link)",
        "bg-color": "var(--bg-color)",
        "bg-card-color": "var(--bg-card-color)",
      },
      fontFamily: {
        "dm-sans": "var(--family-dm-sans)",
        poppins: "var(--family-poppins)",
      },
      fontSize: {
        general: "var(--fs-general)",
        title: "var(--fs-title)",
        "title-bg": "var(--fs-title-bg)",
        "section-title": "var(--fs-section-title)",
        "card-title": "var(--fs-card-title)",
        "section-subtitle": "var(--fs-section-subtitle)",
        "section-card-title": "var(--fs-section-card-title)",
        "card-text-ltl": "var(--fs-card-text-ltl)",
      },
      maxWidth: {
        desktop: "1240px",
      },
      screens: {
        sm: { min: "0px", max: "767px" },

        md: { min: "768px", max: "1023px" },
      },
    },
  },
  plugins: [],
};
