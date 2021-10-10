import DashboardLayout from './DashboardLayout'
import Card from './ui/Card'
import { Flex } from '@theme-ui/components'
import { IoPencilOutline } from 'react-icons/io5'
import { useRouter } from 'next/router'

export default function Guide() {
    const router = useRouter()
    return (
        <DashboardLayout
            title="راهنما"
            description=".جایی واسه شروع و یادگرفتن ترفند های جدید، برای پرسیدن سوالات جواب داده نشده از جامعه بپرسید"
        >
            <Flex sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <Card
                    onClick={() => router.push('/editor')}
                    title="ویرایشگر"
                    description="صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                >
                    <IoPencilOutline />
                </Card>
                <Card
                    onClick={() => router.push('/editor')}
                    title="ویرایشگر"
                    description="صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                >
                    <IoPencilOutline />
                </Card>
                <Card
                    onClick={() => router.push('/editor')}
                    title="ویرایشگر"
                    description="صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                >
                    <IoPencilOutline />
                </Card>
                <Card
                    onClick={() => router.push('/editor')}
                    title="ویرایشگر"
                    description="صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                >
                    <IoPencilOutline />
                </Card>
                <Card
                    onClick={() => router.push('/editor')}
                    title="ویرایشگر"
                    description="صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"
                >
                    <IoPencilOutline />
                </Card>
            </Flex>
        </DashboardLayout>
    )
}
