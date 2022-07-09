import React from 'react'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { authUserRoute } from '../components/utils/authUserRoute'

const Test = () => {
    return (
        <div>
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
