import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { authUserRoute } from '../utils/authUserRoute'
import Head from "next/head";

const Test = () => {
    return (
        <div>
            <Head>
                <title>Test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                Test Page
            </div>

            <Link href="/">
                <a>to HOME</a>
            </Link>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = authUserRoute(async ctx => {
    return {
      props: {
        user: true,
      }
    }
})

export default Test
