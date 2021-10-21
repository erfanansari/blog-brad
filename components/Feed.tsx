import { Flex, Box, Button, Heading, Text } from '@theme-ui/components'
import Link from '$ui/Link'
import BlogItem from './BlogItem'
import { assertIsTypedArray, isBlog } from 'types'

export default function Feed({ blogs }: any) {
    assertIsTypedArray(blogs, isBlog)
    blogs.map((el) => {})

    return (
        <Box>
            <Flex
                sx={{
                    border: '1px solid rgba(0, 0, 0, 0.15)',
                    p: 3,
                    borderRadius: '7px',
                    justifyContent: 'space-between',
                }}
            >
                <Heading sx={{ color: 'muted' }} as="h3">
                    My feed
                </Heading>
                <Flex
                    sx={{
                        a: {
                            mx: 3,
                            color: 'muted',
                            fontSize: 2,
                        },
                    }}
                >
                    <Link href="/realvent">Realevent</Link>
                    <Link href="/featured">Featured</Link>
                    <Link href="/recent">Recent</Link>
                </Flex>
            </Flex>
            {blogs.length === 0 && (
                <Heading as="h2" sx={{ p: 6 }}>
                    No Blogs to show
                </Heading>
            )}
            {blogs.map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
            ))}
        </Box>
    )
}
