import type { NextPage } from 'next'
import Layout from '$components/Layout'
import Landing from '$components/Landing'

const Home: NextPage = () => {
    return (
        <Layout title={'بلاگ'}>
            <Landing />
        </Layout>
    )
}

export default Home
