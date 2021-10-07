import Link from 'next/link'
import { motion } from 'framer-motion'
import { Text, Flex, Box } from '@theme-ui/components'
import { PropsWithChildren, useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

function Block({ label, children, href }: PropsWithChildren<{ label: string; href: string }>) {
    const [isHover, setIsHover] = useState(false)
    return (
        <Link href={href} passHref>
            <Flex
                onMouseEnter={() => setIsHover(!isHover)}
                onMouseLeave={() => setIsHover(!isHover)}
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // width: '100%',
                    maxWidth: '100%',
                    // ml: 3,flex-end
                    margin: ['.5rem 0 .5rem .5rem', '1rem 0 1rem 1rem'],
                    padding: '1rem',
                    borderRadius: '4px',
                    width: ['100%', null, '40%'],
                    transition: 'box-shadow .1s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                        boxShadow: '0 0 0 0.25rem rgba(0, 0, 0 , 0.080)',
                    },
                }}
            >
                <motion.div
                    animate={{
                        scale: isHover ? 1.2 : 1,
                        x: isHover ? -5 : 0,
                        y: isHover ? 4 : 0,
                    }}
                    initial={{
                        scale: 1,
                        x: 0,
                        y: 0,
                    }}
                >
                    <IoChevronBackOutline size={22} />
                </motion.div>
                <Flex sx={{ alignItems: 'center' }}>
                    <Text as="p" sx={{ mr: '.7rem' }}>
                        {label}
                    </Text>
                    {children}
                </Flex>
            </Flex>
        </Link>
    )
}

export default Block
