import type { NextPage } from 'next'
import Layout from '$components/Layout'
import Profile from '$components/Profile'

const Home: NextPage = () => {
    return (
        <Layout title={'داشبورد'}>
            <Profile />
        </Layout>
    )
}

export default Home
