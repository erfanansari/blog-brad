import { useState } from 'react'
import { Button, Flex, Box, Divider } from '@theme-ui/components'
import { AnimatePresence, motion } from 'framer-motion'
import {
    IoMenu,
    IoClose,
    IoNotificationsCircleOutline,
    IoPersonCircleOutline,
    IoSunnyOutline,
    IoPricetagOutline,
    IoCompassOutline,
    IoBookmarkOutline,
    IoSearchOutline,
    IoNewspaperOutline,
} from 'react-icons/io5'
import Link from '$ui/Link'

const Title = ({ pb }: { pb?: number }) => (
    <Link href="/" sx={{ fontWeight: 'bold', fontSize: 4, pb }}>
        hashnode
    </Link>
)
const Links = () => (
    <>
        <Link
            href="/write"
            sx={{
                fontWeight: 'bold',
                pb: 2,
            }}
        >
            <Button>WRITE</Button>
        </Link>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                a: {
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    svg: {
                        mr: 2,
                    },
                },
            }}
        >
            <Divider />
            <Link href="/">
                <IoNewspaperOutline size={25} />
                My feed
            </Link>
            <Link href="/explore">
                <IoCompassOutline size={25} />
                Explore
            </Link>
            <Link href="/tags">
                <IoPricetagOutline size={25} />
                Tags
            </Link>
            <Link href="/tags">
                <IoBookmarkOutline size={25} />
                Bookmarks
            </Link>
            <Link href="/search">
                <IoSearchOutline size={25} />
                Search
            </Link>
        </Box>
    </>
)

export default function Header() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Box
                sx={{
                    flexDirection: 'column',
                    minWidth: '12%',
                    display: ['none', null, 'flex'],
                }}
            >
                <Title pb={3} />
                <Links />
                <Divider />
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
                        {open ? (
                            <motion.div
                                animate={{
                                    rotateZ: '-90deg',
                                }}
                            >
                                <IoClose size={30} />
                            </motion.div>
                        ) : (
                            <motion.div
                                animate={{
                                    rotateZ: 0,
                                }}
                            >
                                <IoMenu size={30} />
                            </motion.div>
                        )}
                    </Button>
                    <Title />
                </Flex>
                <Box>
                    <IoSunnyOutline
                        size={30}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <IoNotificationsCircleOutline
                        size={30}
                        style={{ marginRight: '0.5rem' }}
                    />
                    <IoPersonCircleOutline size={30} />
                </Box>
            </Flex>
            <AnimatePresence>
                {open && (
                    <motion.div
                        style={{
                            background: 'white',
                            position: 'fixed',
                            display: 'flex',
                            flexDirection: 'column',
                            top: '3.2rem',
                            zIndex: 1,
                            padding: '1rem 2rem',
                            borderRadius: 5,
                            width: '60%',
                            border: '1px solid #ddd',
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        initial={{
                            opacity: 0,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        <Links />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
