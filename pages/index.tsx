import type { GetStaticProps, NextPage } from 'next'
import Layout from '$components/Layout'
import Feed from '$components/Feed'

const Home: NextPage = ({ blogs }: any) => {
    return (
        <Layout title={'بلاگ'}>
            <Feed blogs={blogs} />
        </Layout>
    )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(`http://localhost:1337/articles`)
    const blogs = await res.json()

    return {
        props: { blogs },
    }
}
