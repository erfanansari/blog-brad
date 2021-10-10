import { Box, Flex, Text } from '@theme-ui/components'
import BreadCrumbs from 'nextjs-breadcrumbs'
import { IoChevronBackOutline } from 'react-icons/io5'

const words: Record<string, string> = {
    profile: 'پروفایل',
    dashboard: 'داشبورد',
    guide: 'راهنما',
}

export default function BreadCrumb() {
    return (
        <Box
            sx={{
                width: '100%',
                my: 2,
                li: {
                    listStyle: 'none',
                    mx: 2,
                    alignItems: 'center',
                },
                'li a': {
                    color: '#757575',
                },
                ol: {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'row-reverse',
                },
                'ol li a': {
                    textDecoration: 'none',
                },
                'ol li a div svg': {
                    mb: '1px',
                    mr: 2,
                },
            }}
        >
            <BreadCrumbs
                omitRootLabel
                // omitIndexList={[2, 3]}
                transformLabel={(title) => {
                    return (
                        <Flex sx={{ alignItems: 'center' }}>
                            {title === 'dashboard' && <IoChevronBackOutline />}
                            <Text>{words[title]}</Text>
                        </Flex>
                    )
                }}
            />
        </Box>
    )
}
