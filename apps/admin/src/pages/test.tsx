import React from 'react'
import Head from 'next/head'

const Test = () => {
    return (
        <div>
            <Head>
                <title>Test</title>
                <link rel="icon" href="/public/favicon.ico" />
            </Head>

            <div className="flex">
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-primary-500"></div>
                    <div className="w-24 h-24 bg-primary-400"></div>
                    <div className="w-24 h-24 bg-primary-300"></div>
                    <div className="w-24 h-24 bg-primary-200"></div>
                    <div className="w-24 h-24 bg-primary-100"></div>
                </div>
                <div className="flex flex-col">
                    <div className="w-24 h-24 bg-secondary-500"></div>
                    <div className="w-24 h-24 bg-secondary-400"></div>
                    <div className="w-24 h-24 bg-secondary-300"></div>
                    <div className="w-24 h-24 bg-secondary-200"></div>
                    <div className="w-24 h-24 bg-secondary-100"></div>
                </div>
            </div>

            <div>Test Page</div>
        </div>
    )
}

export default Test
