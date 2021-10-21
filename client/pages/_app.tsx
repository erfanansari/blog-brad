// import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../components/ui/theme'
import GlobalStyles from '$components/ui/GlobalStyles'
// import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'

export default function MyApp({ Component, pageProps }: AppProps) {
    // const [queryClient] = useState(() => new QueryClient())
    return (
        <ThemeProvider theme={theme}>
            {/* <QueryClientProvider client={queryClient}> */}
            {/* <Hydrate state={pageProps.dehydratedState}> */}
            <Component {...pageProps} />
            <GlobalStyles />
            {/* </Hydrate> */}
            {/* <ReactQueryDevtools /> */}
            {/* </QueryClientProvider> */}
        </ThemeProvider>
    )
}
