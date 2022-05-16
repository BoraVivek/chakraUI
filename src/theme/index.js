const { extendTheme, theme: base } = require("@chakra-ui/react");

// Extending themes of Chakra UI
const theme = extendTheme({
    colors: {
        // Defining our brand color
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
          },
    },
    fonts:{
        // Setting base font of heading as fallback
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`
    }
});

export default theme;