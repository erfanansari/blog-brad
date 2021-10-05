import '@fontsource/vazir'
import '@fontsource/fira-code'

import { Global } from '@emotion/react'

const GlobalStyles = () => (
    <Global
        styles={() => ({
            '*': {
                boxSizing: 'border-box',
            },
            body: {
                fontFamily: 'Vazir, sans-serif',
            },
        })}
    />
)

export default GlobalStyles
