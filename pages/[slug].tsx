import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import Layout from '$components/Layout'
import Blog from '$components/Blog'
import { assertIsTypedArray, isBlog } from 'types'
import { Text } from '@theme-ui/components'

const BlogPage: NextPage = ({ blog }: any) => {
    console.log(blog)

    return (
        <Layout title={'بلاگ'}>
            <Blog blog={blog} />
        </Layout>
    )
}

export default BlogPage

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`http://localhost:1337/articles`)
    const blogs = await res.json()
    assertIsTypedArray(blogs, isBlog)
    const paths = blogs.map(({ slug }) => ({ params: { slug } }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug
    const res = await fetch(`http://localhost:1337/articles?slug=${slug}`)
    const blogs = await res.json()

    return {
        props: { blog: blogs[0] },
        revalidate: 1,
    }
}
