import type { Theme } from 'theme-ui'
// font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
// Droid Sans, Helvetica Neue, sans-serif; */

export const theme: Theme = {
    fonts: {
        body: 'Vazir, system-ui, sans-serif',
        heading: 'Vazir, "Avenir Next", sans-serif',
        monospace: 'Input, Fira Code, Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
    fontWeights: {
        body: 400,
        heading: 500,
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.125,
    },
    //   letterSpacings: {
    // body: 'normal',
    // caps: '0.2em',
    //   },
    // },
    // space: [8, 16, 24],
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#16F',
        secondary: '#fFA',
        accent: '#CCE4FF',
        error: '#FF453A',
        highlight: 'rgba(0, 0, 0, 0.070)',
        muted: '#444',
        modes: {
            dark: {
                text: '#fff',
                background: '#000',
                primary: '#16E',
            },
        },
    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',
        },
    },
    cards: {
        primary: {
            padding: '1rem 2rem',
            m: 1,
            borderRadius: 15,
            border: '2px solid transparent',
            transition: 'border-color .2s ease',
            '&:hover': {
                border: '2px solid  #ccc',
            },
        },
        compact: {
            padding: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'muted',
        },
    },
    links: {
        primary: {
            color: 'red',
        },
        nav: {
            textDecoration: 'none',
        },
    },
    forms: {
        label: {
            fontSize: 4,
            fontWeight: 'bold',
            mb: 2,
        },
        input: {
            borderColor: 'rgba(0, 0, 0, 0.10)',
            borderRadius: 12,
            // fontFamily: 'body',
            padding: '1.2rem',
            height: '3.5rem',
            borderWidth: 2,
            // width: '100%',
            fontSize: 2,
            '&:focus': {
                borderColor: 'black',
                // boxShadow: '0 0 0 0.25rem rgba(0, 0, 0 , 0.070)',
                outline: 'none',
            },
        },
        select: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                // boxShadow: '0 0 0 0.25rem rgba(0, 0, 0 , 0.070)',
                outline: 'none',
            },
        },
        textarea: {
            borderColor: 'gray',
            '&:focus': {
                borderColor: 'primary',
                // boxShadow: '0 0 0 0.25rem rgba(0, 0, 0 , 0.070)',
                outline: 'none',
            },
        },
        slider: {
            bg: 'muted',
        },
    },
    buttons: {
        primary: {
            fontFamily: 'body',
            color: 'background',
            bg: 'primary',
            transition: 'all .2s ease',
            '&:hover': {
                boxShadow: '0 0 0 0.22rem #16F',
                background: '#16F',
                // color: 'pink',
            },
            cursor: 'pointer',
        },
        secondary: {
            fontFamily: 'body',
            color: 'background',
            bg: 'secondary',
            transition: 'all .2s ease',

            '&:hover': {
                boxShadow: '0 0 0 0.22rem #CCE4FF',
                background: '#CCE4FF',
                // color: 'pink',
            },
            cursor: 'pointer',
        },
    },

    breakpoints: ['576px', '768px', '992px', '1200px', '1440px'],
    styles: {
        root: {
            fontFamily: 'body',
            fontWeight: 'body',
        },
        input: {
            background: 'red',
        },
        a: {
            color: 'black',
            fontSize: 3,
            textDecoration: 'none',
        },
        h1: {
            variant: 'text.heading',
            fontSize: 5,
        },
        h2: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h3: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 2,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 1,
        },
        h6: {
            variant: 'text.heading',
            fontSize: 0,
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
    },
}
