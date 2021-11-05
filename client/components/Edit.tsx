import { useState, ChangeEvent, MouseEvent } from 'react'
import { Box, Label, Heading, Input, Textarea } from '@theme-ui/components'
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
    const [image, setImage] = useState<{
        path: string | undefined
        file: string | File | null
    }>({
        path: undefined,
        file: null,
    })

    const previewImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                console.log('done')
                setImage((prev) => ({
                    ...prev,
                    path: reader.result?.toString(),
                }))
            }
        }
        if (e.target.files?.[0] !== undefined) {
            reader.readAsDataURL(e.target.files[0])
            const imageFile = e.target.files[0]
            console.log(imageFile)
            setImage((prev) => ({ ...prev, file: imageFile }))
            // setImage({ ...image, file: imageFile })
        }
    }

    const uploadImage = async () => {
        // e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
        // if (e) e.preventDefault()
        if (!image.file) return
        console.log('clicked')

        const formData = new FormData()
        formData.append('files', image.file)
        formData.append('refId', blog.id.toString())
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
        console.log(data)

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
        await uploadImage()
        if (!res.ok) {
            console.log(res)
        } else {
            const newBlog = await res.json()
            router.push(`/${newBlog.slug}`)
        }
    }

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
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
                rows={20}
                sx={{
                    mb: 4,
                    fontWeight: 'bold',
                }}
                {...register('content')}
            />

            <Input
                {...register('image')}
                onChange={previewImage}
                sx={{
                    display: 'none',
                }}
                type="file"
                name="image"
                id="image"
            />
            <Label
                htmlFor="image"
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid gray',
                    borderRadius: 12,
                    height: '4rem',
                    mb: 4,
                    cursor: 'pointer',
                    img: {
                        borderRadius: '50%',
                    },
                }}
            >
                Choose Image
            </Label>
            <Box sx={{ textAlign: 'center' }}>
                {blog.image?.formats?.small || image.path ? (
                    <Image
                        src={
                            image.path
                                ? image.path
                                : blog.image?.formats.medium
                                ? blog.image?.formats.medium.url
                                : blog.image!.formats.small.url
                        }
                        alt={blog.image ? blog.image.name : 'No image'}
                        width={250}
                        height={250}
                    />
                ) : (
                    <Heading as="h3" sx={{ pb: 4 }}>
                        No image to show
                    </Heading>
                )}
            </Box>
        </Box>
    )
}
