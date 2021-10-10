/** @jsxImportSource theme-ui */
import BreadCrumb from './ui/BreadCrumb'
import { Box, Flex, Heading, Text } from '@theme-ui/components'
import { PropsWithChildren } from 'react'

interface Props {
    title: string
    description?: string
}

export default function DashboardLayout({ title, children, description }: PropsWithChildren<Props>) {
    return (
        <Flex
            sx={{
                padding: [0, '0 2rem', null, '0 4rem'],
                flexDirection: 'column',
                alignItems: 'flex-end',
                margin: 'auto',
                textAlign: 'right',
            }}
        >
            <BreadCrumb />
            <Box sx={{ mb: 4 }}>
                <Heading as="h1" sx={{ fontSize: 6, mb: description ? 2 : 4, fontWeight: 'bold' }}>
                    {title}
                </Heading>
                {description && <Text sx={{ fontSize: 3, color: 'muted', mb: 2 }}>{description}</Text>}
            </Box>
            {children}
            <BreadCrumb />
        </Flex>
    )
}
