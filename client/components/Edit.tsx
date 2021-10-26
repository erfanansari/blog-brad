import { Box, Input, Textarea } from '@theme-ui/components'
import { GetServerSideProps } from 'next'
import router from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Blog } from 'types'

type Inputs = {
    title: string
    description: string
    content: string
}

export default function Edit({ blog }: { blog: Blog }) {
    console.log(blog)

    const { title, description, content } = blog
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            title,
            description,
            content,
        },
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch(`http://localhost:1337/articles/${blog.id}`, {
            method: 'PUT',
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
                placeholder="Edit..."
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
