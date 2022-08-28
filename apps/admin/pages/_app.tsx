import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { DefaultLayout } from '../components/layouts/Default'

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
    if (router.pathname.startsWith('/auth')) {
        return (
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    )
}

export default MyApp
