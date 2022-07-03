import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        Hello world by ADMIN
      </div>

      <Link href="/test">
          <a>to test</a>
      </Link>
    </div>
  )
}

export default Home
