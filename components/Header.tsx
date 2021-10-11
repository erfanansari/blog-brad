/** @jsxImportSource theme-ui */
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'
import { Button, Flex, Box } from '@theme-ui/components'
import { Link as ThemeUILink } from '@theme-ui/components'

export default function Header() {
    const isAuth = true
    const [open, setOpen] = useState(false)
    const [y, setY] = useState(typeof window === 'undefined' ? 0 : window.scrollY)
    const [hide, setHide] = useState(false)

    const handleNavigation = useCallback(
        (e) => {
            const window: Window = e.currentTarget
            const isTop = window.scrollY < 150
            const isButtom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 300
            console.log(window.innerHeight, window.scrollY, document.body.offsetHeight)

            if (y > window.scrollY || isButtom || isTop) {
                setHide(false)
                // console.log('scrolling up', y)
            } else if (y <= window.scrollY) {
                setHide(true)
                setOpen(false)
                // console.log('scrolling down', y)
            }
            setY(window.scrollY)
        },
        [y],
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            setY(window.scrollY)
            window.addEventListener('scroll', handleNavigation)
        }, 100)
        return () => {
            clearTimeout(timer)
            window.removeEventListener('scroll', handleNavigation)
        }
    }, [handleNavigation])

    return (
        <Box
            sx={{
                position: 'fixed',
                width: '100%',
                top: 0,
                left: 0,
                zIndex: 10,
            }}
        >
            <Flex
                sx={{
                    position: 'absolute',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 2rem',
                    bg: 'white',
                    transition: 'transform 0.45s ease-in-out',
                    transform: `translate(0,${hide ? -100 : 0}px)`,
                }}
            >
                {isAuth ? (
                    <Dropdown open={open} setOpen={setOpen} />
                ) : (
                    <Link href="/dashboard" passHref>
                        <Button
                            style={{
                                padding: '.8rem 1.2rem',
                            }}
                        >
                            اتصال حساب
                        </Button>
                    </Link>
                )}
                <Link href="/" passHref>
                    <ThemeUILink sx={{ fontSize: 4 }}>بلاگ</ThemeUILink>
                </Link>
            </Flex>
        </Box>
    )
}
