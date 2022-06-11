module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        toolmine: {

          "primary": "#dc2626",

          "secondary": "#ea580c",

          "accent": "#111827",

          "neutral": "#1A252D",

          "base-100": "#9ca3af",

          "info": "#3ABFF8",

          "success": "#16a34a",

          "warning": "#FBBD23",

          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}