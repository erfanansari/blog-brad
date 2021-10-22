import Image from 'next/image'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { dateFormater } from 'utils/helper-functions'
import Link from './ui/Link'
import { Blog } from 'types'

interface Props {
    blog: Blog
}
export default function BlogItem({ blog }: Props) {
    return (
        blog.author.picture && (
            <Flex sx={{ flexDirection: 'column', py: 4 }}>
                <Flex
                    sx={{
                        alignItems: 'center',
                        img: {
                            borderRadius: '50%',
                        },
                        mb: 2,
                    }}
                >
                    <Image
                        src={blog.author.picture.formats.small.url}
                        alt={blog.image.name}
                        width={40}
                        height={40}
                    />
                    <Flex
                        sx={{
                            flexDirection: 'column',
                            ml: 3,
                        }}
                    >
                        <Link href="/autor" sx={{ fontWeight: 'bold', color: '#454545' }}>
                            {blog.author.name}
                        </Link>
                        <Text sx={{ fontSize: 1, color: '#888' }}>{dateFormater(blog.published_at)}</Text>
                    </Flex>
                </Flex>
                <Flex
                    sx={{
                        flexDirection: ['column', null, 'row'],
                        justifyContent: 'space-between',
                        // maxWidth: '80%',
                        img: { borderRadius: '4px' },
                    }}
                >
                    <Flex sx={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                        <Link href={`/${blog.slug}`} sx={{ fontSize: 4, fontWeight: 'bold' }}>
                            {blog.title}
                        </Link>
                        <Text sx={{ maxWidth: '90%', my: [2, null, 0] }}>{blog.description}</Text>
                    </Flex>

                    <Box
                        sx={{
                            minWidth: '250px',
                            maxWidth: [null, null, '200px'],
                            maxHeight: [null, null, '125px'],
                            justifyContent: 'space-between',
                            my: [2, null, 0],
                        }}
                    >
                        <Image
                            src={blog.image.formats.medium.url}
                            alt={blog.image.name}
                            width={blog.image.width}
                            height={2000}
                        />
                    </Box>
                </Flex>
            </Flex>
        )
    )
}
