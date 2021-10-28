import { useState, ChangeEvent, MouseEvent } from 'react'
import { Box, Button, Heading, Input, Textarea } from '@theme-ui/components'
import Image from 'next/image'
import router from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Blog } from 'types'

type Inputs = {
    title: string
    description: string
    content: string
    image: string
}

export default function Edit({ blog }: { blog: Blog }) {
    const [image, setImage] = useState<{ [k: string]: string | null }>({
        path: null,
        file: null,
    })

    const previewImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2 && typeof reader.result === 'string') {
                console.log('done')
                // setImage(reader.result)
                // @ts-expect-error
                setImage((prev) => ({ ...prev, path: reader.result }))
            }
        }
        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            // @ts-expect-error
            setImage((prev) => ({ ...prev, file: e.target.files[0] }))
        }
    }

    const uploadImage = async (
        e: MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        e.preventDefault()
        if (!image.file) return
        console.log('clicked')

        const formData = new FormData()
        formData.append('files', image.file)
        formData.append('refId', blog.id)
        formData.append('ref', 'blogs')
        formData.append('field', 'image')

        const res = await fetch(` ${process.env.NEXT_PUBLIC_API_URL}/upload`, {
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        console.log(data)
    }
    const { title, description, content } = blog
    const {
        handleSubmit,
        register,
        // formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            title,
            description,
            content,
        },
    })

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch(
            ` ${process.env.NEXT_PUBLIC_API_URL}/blogs/${blog.id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            },
        )
        if (!res.ok) {
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
            {blog.image || image.path ? (
                <Image
                    src={
                        image.path ? image.path : blog.image.formats.medium.url
                    }
                    alt={blog.image ? blog.image.name : 'image'}
                    width={250}
                    height={250}
                />
            ) : (
                <Heading as="h3">No image to show</Heading>
            )}
            <Input
                {...register('image')}
                onChange={previewImage}
                sx={
                    {
                        // position: 'absolute',
                        // opacity: 0,
                        // zIndex: -1,
                    }
                }
                type="file"
                name="image"
                id="image"
            />
            <Button onClick={uploadImage}>Upload Image</Button>
            {/* <Label
                htmlFor="image"
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid gray',
                    borderRadius: 12,
                    height: '8rem',
                    mb: 4,
                    cursor: 'pointer',
                    img: {
                        borderRadius: '50%',
                    },
                }}
            ></Label> */}
        </Box>
    )
}
