import Head from 'next/head'
import type { FC } from 'react'
import Header from '$components/Header'
// import Footer from "$components/Footer";

interface Props {
    title?: string
    keywords?: string
    description?: string
}

const Layout: FC<Props> = (props) => {
    const { title, keywords, description, children } = props
    return (
        <div style={{ padding: '1.5rem' }}>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            {/*<Footer/>*/}
        </div>
    )
}

Layout.defaultProps = {
    title: 'بلاگ',
    keywords: 'development,coding,programming',
    description: 'the best info and news in development',
}

export default Layout
