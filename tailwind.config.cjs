/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'sm': '768px',   // 手机/平板分界：图片位置切换
        'md': '1024px',  // 平板端：显示左侧边栏 + 主内容
        'lg': '1280px',  // 桌面端：显示左侧 + 中间 + 右侧边栏
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
