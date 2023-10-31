import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#16f46f",
        
"secondary": "#33f778",
        
"accent": "#f41400",
        
"neutral": "#141d24",
        
"base-100": "#e8e8f2",
        
"info": "#7e93e7",
        
"success": "#105642",
        
"warning": "#e78e23",
        
"error": "#f03114",
        },
      },
    ],
  },
}
export default config
