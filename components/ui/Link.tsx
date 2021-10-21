import NextLink from 'next/link'
import { Link as ThemeUILink } from '@theme-ui/components'
import { PropsWithChildren } from 'react'
import { ThemeUIStyleObject } from '@theme-ui/css'

interface Props {
    href: string
    sx?: ThemeUIStyleObject
}
export default function Link({ href, children, sx }: PropsWithChildren<Props>) {
    return (
        <NextLink href={href} passHref>
            <ThemeUILink sx={sx}>{children}</ThemeUILink>
        </NextLink>
    )
}
