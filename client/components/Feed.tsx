import { Flex, Box, Heading, Grid } from '@theme-ui/components'
import Link from '$ui/Link'
import BlogItem from './BlogItem'
import { assertIsTypedArray, isBlog } from 'types'

export default function Feed({ blogs, page, total }: any) {
    assertIsTypedArray(blogs, isBlog)
    const perPage = +process.env.NEXT_PUBLIC_PER_PAGE!
    const lastPage = Math.ceil(total / perPage)

    return (
        <>
            <Flex
                sx={{
                    border: '1px solid rgba(0, 0, 0, 0.15)',
                    p: 3,
                    borderRadius: '7px',
                    justifyContent: 'space-between',
                }}
            >
                <Heading
                    sx={{ color: 'muted', display: ['none', null, 'block'] }}
                    as="h3"
                >
                    My feed
                </Heading>
                <Flex
                    sx={{
                        a: {
                            mx: [1, 2, 3],
                            color: 'muted',
                            fontSize: [1, 2],
                        },
                    }}
                >
                    <Link href="/">Featured</Link>
                    <Link href="/">Recent</Link>
                </Flex>
            </Flex>
            <Grid
                sx={{
                    rowGap: [null, 0, '3rem'],
                }}
            >
                {blogs.length === 0 && (
                    <Heading as="h2" sx={{ p: 6 }}>
                        No Blogs to show
                    </Heading>
                )}
                {blogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                ))}
                {page > 1 && <Link href={`?page=${page - 1}`}>prev</Link>}
                {page < lastPage && (
                    <Link href={`?page=${page + 1}`}>next</Link>
                )}
            </Grid>
        </>
    )
}
