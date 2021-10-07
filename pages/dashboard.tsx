import type { NextPage } from 'next'
import Layout from '$components/Layout'
import Dashboard from '$components/Dashboard'

const Home: NextPage = () => {
    return (
        <Layout title={'داشبورد'}>
            <Dashboard />
        </Layout>
    )
}

export default Home
