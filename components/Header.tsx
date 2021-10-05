/** @jsxImportSource theme-ui */
import { useEffect, useState, useCallback } from 'react'
import { Button, Flex, Heading, Box } from '@theme-ui/components'

export default function Header() {
    const [y, setY] = useState(typeof window === 'undefined' ? 0 : window.scrollY)
    const [scrollingDown, setScrollingDown] = useState(false)
    const handleNavigation = useCallback(
        (e) => {
            const window = e.currentTarget
            if (y > window.scrollY) {
                setScrollingDown(false)
                // console.log('scrolling up', y)
            } else if (y < window.scrollY) {
                setScrollingDown(true)
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
        }, 150)
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
                    transform: `translate(0,${scrollingDown ? -100 : 0}px)`,
                }}
            >
                <Button
                    style={{
                        padding: '1rem 1.5rem',
                    }}
                >
                    اتصال حساب
                </Button>
                <Heading as="h2">بلاگ</Heading>
            </Flex>
        </Box>
    )
}
