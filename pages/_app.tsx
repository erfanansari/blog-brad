import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../components/ui/theme'
import GlobalStyles from '$components/ui/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GlobalStyles />
        </ThemeProvider>
    )
}
export default MyApp
