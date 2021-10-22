import { useEffect, useState, useCallback } from 'react'
import { Button, Flex, Box, Heading } from '@theme-ui/components'
import { IoMenu, IoNotificationsCircleOutline, IoPersonCircleOutline, IoSunnyOutline } from 'react-icons/io5'
import Link from '$ui/Link'

const links = ['Explore', 'Tags', 'Bookmarks', 'Search']
const Title = ({ pb }: { pb?: number }) => (
    <Link href="/" sx={{ fontWeight: 'bold', fontSize: 4, pb }}>
        hashnode
    </Link>
)
const Links = () => (
    <>
        <Link href="/write" sx={{ fontWeight: 'bold' }}>
            <Button>WRITE</Button>
        </Link>
        <Link href="/" sx={{ py: 2 }}>
            My feed
        </Link>
        {links.map((link) => (
            <Link key={link} href={'/' + link.toLowerCase()} sx={{ py: 2 }}>
                {link}
            </Link>
        ))}
    </>
)

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Box sx={{ flexDirection: 'column', minWidth: '12%', display: ['none', null, 'flex'] }}>
                <Title pb={3} />
                <Links />
                <hr style={{ margin: '2rem 0', width: '100%' }} />
            </Box>
            <Flex
                sx={{
                    pb: 3,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    display: [null, null, 'none'],
                    position: 'fixed',
                    top: 0,
                    bg: 'white',
                    width: '100%',
                    left: 0,
                    zIndex: 1,
                    padding: '.8rem 1rem .5rem',
                }}
            >
                <Flex>
                    <Button
                        onClick={() => setOpen(!open)}
                        sx={{ mr: 2, p: 0, bg: 'transparent', color: 'black' }}
                    >
                        <IoMenu size={30} />
                    </Button>
                    <Title />
                </Flex>
                <Box>
                    <IoSunnyOutline size={30} style={{ marginRight: '0.5rem' }} />
                    <IoNotificationsCircleOutline size={30} style={{ marginRight: '0.5rem' }} />
                    <IoPersonCircleOutline size={30} />
                </Box>
            </Flex>
            {open && (
                <Flex
                    sx={{
                        bg: 'white',
                        position: 'fixed',
                        flexDirection: 'column',
                        top: '3.2rem',
                        zIndex: 1,
                        py: 2,
                        px: 4,
                        borderRadius: 5,
                        width: '50%',
                    }}
                >
                    <Links />
                </Flex>
            )}
        </>
    )
}
