import { Flex, Box, Button, Heading, Text, Card as ThemeUICard } from '@theme-ui/components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoLogoTwitter } from 'react-icons/io5'
import logo from '$assets/airdrop.jpg'

function Card() {
    return (
        <ThemeUICard sx={{ my: '1rem', cursor: 'pointer', mx: '.5rem' }}>
            <Image width={300} height={300} src={logo} alt="hi" />
            <Text as="p" sx={{ color: 'muted', maxWidth: '70%', margin: 'auto' }}>
                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </Text>
        </ThemeUICard>
    )
}

const variants = {
    animate: {
        y: 0,
        opacity: 1,
    },
    initial: {
        y: -100,
        opacity: 0,
    },
    transition: {
        duration: 0.3,
        // ease: 'easeInOut',
        type: 'spring',
        stiffness: 200,
    },
}

export default function Landing() {
    return (
        <Box style={{ textAlign: 'center' }}>
            <motion.div variants={variants} animate="animate" initial="initial">
                <Heading
                    as="h2"
                    sx={{
                        maxWidth: [null, '75%', null, '50%'],
                        margin: '8rem auto 0',
                        fontSize: ['2rem', '3rem', null, null, '4rem'],
                    }}
                >
                    .طبق معمول بنویس
                    <br />
                    .بهتر از همیشه نشر بده
                </Heading>
                <motion.div variants={variants} transition={{ delay: 0.3 }}>
                    <Text
                        as="p"
                        sx={{
                            maxWidth: ['80%', '65%'],
                            margin: 'auto',
                            my: ['4rem', '5rem', '5.5rem', '7rem'],
                            color: 'muted',
                        }}
                    >
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                        گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                        شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                        طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
                        فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                        موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد.
                    </Text>
                </motion.div>
                <motion.div variants={variants} transition={{ delay: 0.6 }}>
                    <Flex
                        sx={{
                            mt: '2rem',
                            maxWidth: ['70%', null, '80%'],
                            margin: 'auto',
                            justifyContent: 'space-evenly',
                            flexDirection: ['column-reverse', null, null, 'row'],
                        }}
                    >
                        <Link href="/about" passHref>
                            <Button
                                variant="secondary"
                                sx={{
                                    bg: 'accent',
                                    color: 'primary',
                                    padding: '.7rem',
                                    fontSize: 3,
                                    mt: ['1rem', '1rem', 0],
                                }}
                            >
                                بلاگ من رو بساز
                            </Button>
                        </Link>
                        <Flex sx={{ flexDirection: 'column', textAlign: 'right' }}>
                            <Text as="p" sx={{ fontWeight: 'heading' }}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استیک است.
                            </Text>
                            <Text as="p" sx={{ color: '#666' }}>
                                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                            </Text>
                        </Flex>
                    </Flex>
                </motion.div>
            </motion.div>
            <Flex
                sx={{
                    flexDirection: ['column', null, null, 'row'],
                    justifyContent: 'center',
                    py: '1rem',
                    px: ['1rem', '5rem', '8rem', null, '15rem'],
                }}
            >
                <Card />
                <Card />
            </Flex>

            <Text sx={{ maxWidth: ['80%', '75%'], margin: '4rem auto 2rem' }} as="p">
                را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
                صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
            </Text>
            <a target="_blank" rel="noreferrer" href="https://twitter.com">
                <Text
                    sx={{
                        color: 'muted',
                        transition: 'color 0.2s ease',
                        cursor: 'pointer',
                        mt: '3rem',
                        mb: '4rem',
                        display: 'block',
                        '&:hover': { color: 'primary' },
                    }}
                >
                    <IoLogoTwitter size={35} />
                </Text>
            </a>
        </Box>
    )
}
