/** @jsxImportSource theme-ui */
import { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import DashboardLayout from './DashboardLayout'
import Label from './ui/Label'
import { Flex, Label as ThemeUILabel, Input, Box, Heading, Text, Button } from '@theme-ui/components'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IoPersonCircleOutline } from 'react-icons/io5'

type Inputs = {
    displayName: string
    image: string
}

export default function Profile() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const isDisplayNameEmpty = errors.displayName?.type === 'required'

    const [image, setImage] = useState<string | null>(null)

    const uploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2 && typeof reader.result === 'string') {
                setImage(reader.result)
            }
        }
        if (e.target.files && e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <DashboardLayout title="داشبورد">
            <Box
                onSubmit={handleSubmit(onSubmit)}
                as="form"
                sx={{ width: ['100%', null, '80%', '70%', '50%'], margin: 'auto', direction: 'rtl' }}
            >
                <Label title="نام نمایشی" badge="ضروری" required />

                <Input
                    {...register('displayName', { required: true })}
                    placeholder="Satoshi Nakamoto"
                    id="displayName"
                    name="displayName"
                    sx={{
                        borderColor: isDisplayNameEmpty ? 'error' : 'gray',
                        mb: isDisplayNameEmpty ? 0 : 4,
                        direction: 'ltr',
                    }}
                />
                {errors.displayName && isDisplayNameEmpty && (
                    <Text
                        as="p"
                        sx={{
                            color: 'error',
                            py: 2,
                        }}
                    >
                        نام نمایشی ضرروی است.
                    </Text>
                )}

                <Label title="عکس پروفایل" badge="اختیاری" />

                <Input
                    {...register('image')}
                    onChange={uploadImage}
                    sx={{
                        position: 'absolute',
                        opacity: 0,
                        zIndex: -1,
                    }}
                    type="file"
                    name="image"
                    id="image"
                />
                <ThemeUILabel
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
                >
                    {image ? (
                        <Image src={image} alt="user" width={100} height={100} />
                    ) : (
                        <IoPersonCircleOutline size={100} color="rgba(0, 0, 0, 0.65)" />
                    )}
                </ThemeUILabel>

                <Button
                    disabled={isDisplayNameEmpty ? true : false}
                    sx={{
                        borderRadius: 12,
                        cursor: isDisplayNameEmpty ? 'not-allowed' : 'pointer',
                        width: '100%',
                        bg: isDisplayNameEmpty ? 'rgba(0, 0, 0 , .3)' : 'primary',
                        '&:hover': {
                            boxShadow: isDisplayNameEmpty ? '0 0 0 0 ' : 'primary',
                            bg: isDisplayNameEmpty ? 'rgba(0, 0, 0 , .3)' : 'primary',
                        },
                    }}
                >
                    ثبت تنظیمات پروفایل
                </Button>
            </Box>
        </DashboardLayout>
    )
}
