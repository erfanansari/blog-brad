import { Box, Flex, Input, Heading } from '@theme-ui/components'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import BlogItem from './BlogItem'
import { Blog } from 'types'

interface Props {
    blogs: Blog[]
}
export default function Search({ blogs }: Props) {
    const [term, setTerm] = useState('')
    const router = useRouter()
    const queryTerm = router.query.term
    const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault()
        router.push(`/search?term=${term}`)
        setTerm('')
    }
    return (
        <Box>
            <Flex
                as="form"
                sx={{ flexDirection: 'column' }}
                onSubmit={handleSubmit}
            >
                <Input
                    placeholder="Search hashnode"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                {queryTerm &&
                    (blogs.length === 0 ? (
                        <Heading as="h2" sx={{ p: 4 }}>
                            No results were found for {queryTerm}
                        </Heading>
                    ) : (
                        <Heading as="h2" sx={{ mt: 3 }}>
                            Results for {queryTerm}
                        </Heading>
                    ))}
                {blogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                ))}
            </Flex>
        </Box>
    )
}
