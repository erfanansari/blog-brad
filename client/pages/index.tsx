import type { GetServerSideProps, NextPage } from 'next'
import Layout from '$components/Layout'
import Feed from '$components/Feed'

const Home: NextPage = (props) => {
    return (
        <Layout title={'Hashnode'}>
            <Feed {...props} />
        </Layout>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({
    query: { page = 1 },
}) => {
    // Calc start page
    console.log(page, 'pg')

    const perPage = +process.env.NEXT_PUBLIC_PER_PAGE!
    const start = +page === 1 ? 0 : (+page - 1) * perPage
    // Fetch total
    const totalRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs/count`,
    )
    const total = await totalRes.json()
    // Fetch blogs
    const blogsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs?&_limit=${perPage}&_start=${start}`,
    )
    const blogs = await blogsRes.json()

    return {
        props: { blogs, page: +page, total },
    }
}
