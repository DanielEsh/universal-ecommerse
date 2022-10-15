import type { AppProps } from 'next/app'
import { DefaultLayout } from '@/src/widgets/layouts/Default'

import '@/src/app/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
    if (router.pathname.startsWith('/auth')) {
        return <Component {...pageProps} />
    }

    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}

export default MyApp
