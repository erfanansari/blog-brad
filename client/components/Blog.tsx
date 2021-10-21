import { Box, Flex, Heading, Text, Divider } from '@theme-ui/components'
import { Blog as BlogType } from '../types'
import Image from 'next/image'
import { dateFormater } from 'utils/helper-functions'
import Link from './ui/Link'

interface Props {
    blog: BlogType
}
export default function Blog({ blog }: Props) {
    console.log(blog)

    return (
        <Flex
            sx={{
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 4,
                margin: 'auto',
                // alignItems: 'center',
                img: {
                    borderRadius: '5px',
                },
            }}
        >
            <Image src={blog.image.formats.medium.url} width={700} height={500} alt={blog.image.name} />
            <Heading as="h1" sx={{ alignSelf: 'flex-start', fontWeight: 'bold', py: 4, fontSize: '2.5rem' }}>
                {blog.title}
            </Heading>
            <Divider sx={{ mb: '1.6rem' }} />
            {/* <Heading as="h2">{blog.content}</Heading> */}
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
                    width={55}
                    height={55}
                />
                <Flex sx={{ flexDirection: 'column', ml: 3 }}>
                    <Link href="/autor" sx={{ fontWeight: 'bold', color: '#454545' }}>
                        {blog.author.name}
                    </Link>
                    <Text sx={{ fontSize: 1, fontWeight: 500, color: '#656565' }}>
                        <Text sx={{ fontSize: 1, color: '#888', fontWeight: 'normal' }}>Published On </Text>
                        {dateFormater(blog.published_at)}
                    </Text>
                </Flex>
            </Flex>
            <Divider sx={{ my: 3 }} />
            <Text as="p">{blog.content}</Text>
        </Flex>
    )
}
