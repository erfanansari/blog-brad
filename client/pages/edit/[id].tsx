import Layout from '$components/Layout'
import Edit from '$components/Edit'
import { GetServerSideProps } from 'next'
import { NextPage } from 'next'
import { Blog } from 'types'

const EditPage: NextPage<{ blog: Blog }> = ({ blog }) => {
    return (
        <Layout>
            <Edit blog={blog} />
        </Layout>
    )
}
export default EditPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await fetch(
        ` ${process.env.NEXT_PUBLIC_API_URL}/blogs/${params!.id}`,
    )
    const blog = await res.json()
    return {
        props: { blog },
    }
}
