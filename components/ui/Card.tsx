import { Text, Card as ThemeUICard, Box, Heading } from '@theme-ui/components'
import type { PropsWithChildren, MouseEventHandler } from 'react'

interface Props {
    title: string
    description: string
    onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export default function Card({ title, description, children, onClick }: PropsWithChildren<Props>) {
    return (
        <ThemeUICard onClick={onClick} sx={{ width: ['100%', null, '48%', null, '32%'], cursor: 'pointer' }}>
            <Box sx={{ color: 'primary', fontSize: '2.5rem' }}>{children}</Box>
            <Heading as="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
                {title}
            </Heading>
            <Text sx={{ color: '#646363' }}>{description}</Text>
        </ThemeUICard>
    )
}
