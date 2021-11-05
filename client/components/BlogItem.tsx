import Image from 'next/image'
import { Box, Flex, Text } from '@theme-ui/components'
import { dateFormater } from 'utils/helper-functions'
import Link from './ui/Link'
import { Blog } from 'types'
import { IoPersonCircleOutline } from 'react-icons/io5'
import router from 'next/router'

interface Props {
    blog: Blog
}
export default function BlogItem({ blog }: Props) {
    return (
        // blog.author.picture &&
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
                {blog.author ? (
                    <Image
                        src={blog.author.picture.formats.small.url}
                        alt={blog.image ? blog.image.name : 'blog'}
                        width={40}
                        height={40}
                    />
                ) : (
                    <IoPersonCircleOutline size={30} />
                )}
                <Flex
                    sx={{
                        flexDirection: 'column',
                        ml: 3,
                    }}
                >
                    <Link
                        href="/autor"
                        sx={{ fontWeight: 'bold', color: '#454545' }}
                    >
                        {blog.author ? blog.author.name : 'author'}
                    </Link>
                    <Text sx={{ fontSize: 1, color: '#888' }}>
                        {dateFormater(blog.published_at)}
                    </Text>
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
                <Flex
                    sx={{
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <Link
                        href={`/${blog.slug}`}
                        sx={{ fontSize: 4, fontWeight: 'bold' }}
                    >
                        {blog.title}
                    </Link>
                    <Text sx={{ maxWidth: '90%', my: [2, null, 0] }}>
                        {blog.description}
                    </Text>
                </Flex>

                <Box
                    sx={{
                        minWidth: '250px',
                        maxWidth: [null, null, '200px'],
                        maxHeight: [null, null, '125px'],
                        justifyContent: 'space-between',
                        my: [2, null, 0],
                        cursor: 'pointer',
                    }}
                    onClick={() => router.push(`/${blog.slug}`)}
                >
                    {blog.image?.formats && (
                        <Image
                            src={
                                blog.image.formats.medium
                                    ? blog.image.formats.medium.url
                                    : blog.image.formats.small.url
                            }
                            alt={blog.image ? blog.image.name : 'author'}
                            layout="responsive"
                            width={250}
                            height={150}
                            // width={blog.image && blog.image.width  < 500? blog.image.width : 450}
                            // height={
                            //     blog.image && blog.image.height < 500
                            //         ? blog.image.height
                            //         : 550
                            // }
                        />
                    )}
                </Box>
            </Flex>
        </Flex>
    )
}
