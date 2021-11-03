import { Box } from '@theme-ui/components'
import Link from './Link'

interface Props {
    page: number
    total: number
}
export default function Pagination({ page, total }: Props) {
    const perPage = +process.env.NEXT_PUBLIC_PER_PAGE!
    const lastPage = Math.ceil(total / perPage)

    return (
        <Box
            sx={{
                my: 5,
                alignSelf: 'end',
            }}
        >
            {page > 1 && (
                <Link
                    sx={{
                        mx: 1,
                        bg: 'primary',
                        color: 'white',
                        py: 2,
                        px: 3,
                        borderRadius: 4,
                    }}
                    href={`?page=${page - 1}`}
                >
                    prev
                </Link>
            )}
            {page < lastPage && (
                <Link
                    sx={{
                        mx: 1,
                        bg: 'primary',
                        color: 'white',
                        py: 2,
                        px: 3,
                        borderRadius: 4,
                    }}
                    href={`?page=${page + 1}`}
                >
                    next
                </Link>
            )}
        </Box>
    )
}
