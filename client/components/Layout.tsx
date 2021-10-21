import Head from 'next/head'
import type { FC } from 'react'
import Header from '$components/Header'
import { Flex } from 'theme-ui'
// import Footer from "$components/Footer";

interface Props {
    title?: string
    keywords?: string
    description?: string
}

const Layout: FC<Props> = (props) => {
    const { title, keywords, description, children } = props
    return (
        <Flex sx={{ py: 3, px: '6rem', justifyContent: 'center' }}>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main style={{ minWidth: '80%', marginLeft: '1rem' }}>{children}</main>
            {/*<Footer/>*/}
        </Flex>
    )
}

Layout.defaultProps = {
    title: 'بلاگ',
    keywords: 'development,coding,programming',
    description: 'the best info and news in development',
}

export default Layout
