import { Box, Input, Textarea } from '@theme-ui/components'
import router from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    title: string
    description: string
    content: string
}

export default function Write() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('http://localhost:1337/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (!res.ok) {
            alert('fuck')
            console.log(res)
        } else {
            const newBlog = await res.json()
            router.push(`/${newBlog.slug}`)
        }
    }
    return (
        <Box
            as="form"
            // sx={{ }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Input
                placeholder="Write..."
                sx={{
                    border: 'none',
                    fontSize: 4,
                    lineHeight: 4,
                    mb: 4,
                    fontWeight: 'bold',
                }}
                {...register('title')}
            />
            <Textarea
                placeholder="description..."
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                }}
                {...register('description')}
            />
            <Textarea
                placeholder="content..."
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                }}
                {...register('content')}
            />
        </Box>
    )
}
