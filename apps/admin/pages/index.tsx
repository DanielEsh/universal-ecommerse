import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { authUserRoute } from '../utils/authUserRoute'
import { getUser } from '../service/user.service'

const onButtonClick = async () => {
    const user = await getUser()
    console.log('USER', user)
}

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>Hello world by ADMIN</div>

            <div>
                <button onClick={onButtonClick}>User</button>
            </div>
            <Link href="/test">
                <a>to test</a>
            </Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = authUserRoute(
    async (ctx) => {
        return {
            props: {
                user: true,
            },
        }
    },
)

export default Home
