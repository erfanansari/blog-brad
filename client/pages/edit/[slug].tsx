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
    console.log(params!.slug)

    const res = await fetch(`http://localhost:1337/articles/${params!.slug}`)
    const blog = await res.json()
    return {
        props: { blog },
    }
}
