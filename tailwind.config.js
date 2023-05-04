module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'],
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-green-1': '#42B883',
        'brand-dark-1': '#4C5B61',
        'brand-grey-1': '#4b5563',
        'brand-grey-2': '#e5e7eb',
        'brand-grey-3': '#d5d7db',
        'brand-pink-1': '#E15A97',
        'brand-white-1': '#F7F7F7'
      },
      backgroundColor: {
        'brand-green-1': '#42B883',
        'brand-dark-1': '#4C5B61',
        'brand-grey-1': '#4b5563',
        'brand-grey-2': '#e5e7eb',
        'brand-grey-3': '#d5d7db',
        'brand-pink-1': '#E15A97',
        'brand-white-1': '#F7F7F7'
      },
      textColor: {
        'brand-green-1': '#42B883',
        'brand-dark-1': '#4C5B61',
        'brand-grey-1': '#4B5563',
        'brand-grey-2': '#e5e7eb',
        'brand-pink-1': '#E15A97',
        'brand-white-1': '#F7F7F7'
      },
      boxShadow: {
        'basic': '2px 6px 12px 3px rgba(0, 0, 0, 0.2)',
      },
      borderColor: {
        'brand-green-1': '#42B883',
        'brand-dark-1': '#4C5B61',
        'brand-grey-1': '#4b5563',
        'brand-grey-2': '#e5e7eb',
        'brand-grey-3': '#d5d7db',
        'brand-pink-1': '#E15A97'
      },
      backgroundImage: {
        'robust-tech': "url('src/assets/img/home/robust-tech.png')",
        'communication': "url('src/assets/img/home/communication.jpg')",
        'flexibility': "url('src/assets/img/home/flexibility.jpg')",
      },
      minHeight: {
        'agile-innovation-section': '500px',
      }
  
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}