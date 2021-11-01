import { Box, Input, Textarea } from '@theme-ui/components'
import router from 'next/router'
import { useEffect, useRef } from 'react'
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
        setFocus,
        // formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
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
    useEffect(() => {
        setFocus('title')
    }, [setFocus])
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
                    fontSize: 5,
                    lineHeight: 4,
                    mt: 2,
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
