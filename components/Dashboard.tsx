/** @jsxImportSource theme-ui */
// import { useEffect, useState, useCallback } from 'react'
import Block from '$components/Block'
// import Link from 'next/link'
import { Flex } from '@theme-ui/components'
import { Heading, Text } from '@theme-ui/components'
import {
    IoPersonCircleOutline,
    IoBookOutline,
    IoExitOutline,
    IoTrendingUpSharp,
    IoPencilOutline,
} from 'react-icons/io5'
// sx={{ alignItems: 'flex-end', width: '80%', margin: 'auto' }}
export default function Dashboard() {
    return (
        <Flex
            sx={{
                padding: [0, '2rem', null, '4rem'],
                flexDirection: 'column',
                alignItems: 'flex-end',
                width: '80%',
                margin: 'auto',
                textAlign: 'right',
            }}
        >
            {/* <Box sx={{ width: '100%' }}> */}
            <Heading as="h1" sx={{ fontSize: 6, mb: 4, fontWeight: 'bold' }}>
                داشبورد
            </Heading>

            <Text as="p" sx={{ color: 'muted', fontSize: '1.3rem' }}>
                پروفایل شما
            </Text>
            {/* </Box> */}
            <Flex sx={{ width: '100%', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                <Block label="نام کاربری" href="/dashboard/profile">
                    <IoPersonCircleOutline size={40} />
                </Block>
            </Flex>
            <Text as="p" sx={{ color: 'muted', fontSize: '1.3rem' }}>
                بلاک ها
            </Text>
            <Flex sx={{ width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Block label="ویرایش" href="/edit">
                    <IoPencilOutline size={40} />
                </Block>
                <Block label="راهنما" href="/guid">
                    <IoBookOutline size={40} />
                </Block>

                <Block label="‌ورودی" href="/entry">
                    <IoExitOutline size={40} />
                </Block>
                <Block label="مزایده" href="/aucation">
                    <IoTrendingUpSharp size={40} />
                </Block>
            </Flex>
        </Flex>
    )
}
