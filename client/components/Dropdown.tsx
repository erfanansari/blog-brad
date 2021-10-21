import Link from 'next/link'
import { Box, Button, Flex, Text } from '@theme-ui/components'
import { IoChevronDown, IoAlbumsOutline, IoPersonCircleOutline, IoLogOutOutline } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

interface Props {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
export default function Dropdown({ open, setOpen }: Props) {
    return (
        <Box>
            <Button
                onClick={() => setOpen(!open)}
                sx={{
                    display: 'flex',
                    color: 'black',
                    bg: 'highlight',
                    alignItems: 'center',
                    borderRadius: '50%',
                    height: '3.2rem',
                    '&:hover': {
                        boxShadow: '0 0 0 0.22rem rgba(0, 0, 0, 0.11)',
                        bg: 'rgba(0, 0, 0, 0.11)',
                    },
                }}
            >
                <IoChevronDown size={22} />
            </Button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        animate={{
                            opacity: 1,
                            y: 5,
                            // rotate: 0,
                            scale: 1,
                        }}
                        initial={{
                            y: -10,
                            // rotate: '45deg',
                            opacity: 0,
                        }}
                        exit={{
                            y: -10,
                            // rotate: '45deg',
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    >
                        <Flex
                            sx={{
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                position: 'absolute',
                                bg: 'white',
                                border: '2px solid rgba(0, 0, 0, 0.070)',
                                borderRadius: 12,
                                padding: 3,
                                mt: 2,
                                svg: {
                                    ml: 2,
                                },
                                'a, span': {
                                    textDecoration: 'none',
                                    color: 'black',
                                    padding: 2,
                                },
                                span: {
                                    cursor: 'default',
                                },
                            }}
                        >
                            <Flex
                                sx={{
                                    alignItems: 'center',
                                    minWidth: '11rem',
                                }}
                            >
                                {/* نام نمایشی */}
                                <Text>Satoshi Nakamato</Text>
                                <IoPersonCircleOutline size={20} />
                            </Flex>
                            <Flex sx={{ alignItems: 'center' }}>
                                <Link href="/dashboard">داشبورد</Link>
                                <IoAlbumsOutline size={20} />
                            </Flex>
                            <Flex sx={{ alignItems: 'center' }}>
                                <Link href="/dashboard/logout">خروج</Link>
                                <IoLogOutOutline size={20} />
                            </Flex>
                        </Flex>
                    </motion.div>
                )}
            </AnimatePresence>
        </Box>
    )
}
