import { Label as ThemeUILabel, Text } from '@theme-ui/components'

interface Props {
    title: string
    badge?: string
    required?: boolean
}

export default function Label({ title, badge, required }: Props) {
    return (
        <ThemeUILabel htmlFor="displayName" sx={{ alignItems: 'center', py: 2 }}>
            {title}
            <Text
                sx={{
                    fontSize: 1,
                    fontWeight: 400,
                    color: required ? 'primary' : 'gray',
                    bg: required ? 'accent' : 'highlight',
                    borderRadius: '50px',
                    padding: '.1rem .5rem',
                    mr: 2,
                }}
            >
                {badge}
            </Text>
        </ThemeUILabel>
    )
}
