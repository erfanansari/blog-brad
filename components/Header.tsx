import { useEffect, useState, useCallback } from 'react'
import { Button, Flex, Box, Heading } from '@theme-ui/components'
import Link from '$ui/Link'

const links = ['Explore', 'Tags', 'Bookmarks', 'Search']
export default function Header() {
    return (
        <Flex sx={{ flexDirection: 'column', minWidth: '12%' }}>
            <Link href="/" sx={{ fontWeight: 'bold', fontSize: 4, pb: 3 }}>
                hashnode
            </Link>
            <Link href="/write" sx={{ fontWeight: 'bold' }}>
                <Button>WRITE</Button>
            </Link>
            <hr style={{ margin: '2rem 0', width: '100%' }} />
            <Link href="/" sx={{ py: 2 }}>
                My feed
            </Link>
            {links.map((link) => (
                <Link key={link} href={'/' + link.toLowerCase()} sx={{ py: 2 }}>
                    {link}
                </Link>
            ))}
        </Flex>
    )
}
