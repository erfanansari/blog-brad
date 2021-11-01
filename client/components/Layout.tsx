import Head from 'next/head'
import type { FC } from 'react'
import Header from '$components/Header'
import { Grid, Box } from 'theme-ui'
// import Footer from "$components/Footer";

interface Props {
    title?: string
    keywords?: string
    description?: string
}

const Layout: FC<Props> = (props) => {
    const { title, keywords, description, children } = props
    return (
        <Grid
            columns={[null, null, '1fr 4fr', '1.15fr 6fr', '1.05fr 6fr']}
            sx={{
                py: 3,
                px: ['1rem', '2rem', '3rem', '5.5rem'],
                // flexDirection: ['column', null, 'row'],
                // justifyContent: 'center',
                columnGap: '2rem',
                gridAutoRows: '10px',
            }}
        >
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/* <main
                style={{
                    marginTop: '3rem',
                }}
            >
                {children}
            </main> */}
            <Box
                as="main"
                role="main"
                sx={{
                    // minWidth: '80%',
                    mt: ['3rem', null, 0],
                    // ml: [0, null, '3rem'],
                }}
            >
                {children}
            </Box>
            {/*<Footer/>*/}
        </Grid>
    )
}

Layout.defaultProps = {
    title: 'Hashnode',
    keywords: 'development,coding,programming',
    description: 'the best info and news in development',
}

export default Layout
