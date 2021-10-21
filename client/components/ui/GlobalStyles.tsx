import '@fontsource/inter/500.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/fira-code'

import { Global } from '@emotion/react'

const GlobalStyles = () => (
    <Global
        styles={() => ({
            '*': {
                boxSizing: 'border-box',
            },
            body: {
                fontFamily: 'Inter, sans-serif',
            },
        })}
    />
)

export default GlobalStyles
