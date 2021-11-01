import { Flex, Heading, Text, Divider, Button } from '@theme-ui/components'
import { Blog as BlogType } from '../types'
import Image from 'next/image'
import { dateFormater } from 'utils/helper-functions'
import Link from './ui/Link'
import router from 'next/router'
import { IoPersonCircleOutline } from 'react-icons/io5'

interface Props {
    blog: BlogType
}
export default function Blog({ blog }: Props) {
    const removeBlog = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/blogs/${blog.id}`,
            {
                method: 'DELETE',
            },
        )
        const data = await res.json()
        if (!res.ok) {
            alert(data.message)
        } else {
            router.push('/')
        }
    }

    const { image } = blog
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
            {image && (
                <Image
                    src={
                        image.formats.medium
                            ? image.formats.medium.url
                            : image.formats.small.url
                    }
                    width={700}
                    height={500}
                    alt={blog.image ? blog.image.name : 'blog'}
                />
            )}
            <Heading
                as="h1"
                sx={{
                    alignSelf: 'flex-start',
                    fontWeight: 'bold',
                    py: 4,
                    fontSize: ['1.5rem', '2.5rem'],
                }}
            >
                {blog.title}
            </Heading>
            <Divider sx={{ mb: '1.6rem' }} />
            <Flex
                sx={{
                    alignItems: 'center',
                    img: {
                        borderRadius: '50%',
                    },
                    mb: 2,
                }}
            >
                {blog.author ? (
                    <Image
                        src={blog.author.picture.formats.small.url}
                        alt={blog.image ? blog.image.name : 'blog'}
                        width={40}
                        height={40}
                    />
                ) : (
                    <IoPersonCircleOutline size={35} />
                )}
                <Flex sx={{ flexDirection: 'column', ml: 3 }}>
                    <Link
                        href="/autor"
                        sx={{ fontWeight: 'bold', color: '#454545' }}
                    >
                        {blog.author ? blog.author.name : 'author'}
                    </Link>
                    <Text
                        sx={{ fontSize: 1, fontWeight: 500, color: '#656565' }}
                    >
                        <Text
                            sx={{
                                fontSize: 1,
                                color: '#888',
                                fontWeight: 'normal',
                            }}
                        >
                            Published On{' '}
                        </Text>
                        {dateFormater(blog.published_at)}
                    </Text>
                </Flex>
            </Flex>
            <Divider sx={{ mt: '1.2rem', mb: '2rem' }} />
            <Text as="p">{blog.content}</Text>
            <Button onClick={removeBlog}>Delete</Button>
            <Link href={`/edit/${blog.id}`}>Edit</Link>
        </Flex>
    )
}
