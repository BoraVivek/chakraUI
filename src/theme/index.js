const { extendTheme, theme: base, withDefaultColorScheme, withDefaultVariant } = require("@chakra-ui/react");

// Input based Styles
const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none'
            }
        }
    }
}


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
    }, 
    // Overriding the built-in component's style
    components:{
        // Customizing the Input Component
        Input: { ...inputSelectStyles },

        // Customizing the Select Component
        Select: { ...inputSelectStyles },

        // Customizing the Checkbox Component
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: 'none',
                    _focus: {
                        ring: 2,
                        ringColor: 'brand.500',
                    }
                }
            }
        }
    }
}, withDefaultColorScheme({
    colorScheme: "brand",
    components: ['Checkbox']
}), withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select']
}));

export default theme;