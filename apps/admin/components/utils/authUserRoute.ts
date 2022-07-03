import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

type Options = {
  roles: any
}

export function authUserRoute(fn: GetServerSideProps, options?: Options) {
  return async (ctx: GetServerSidePropsContext) => {
    const { accessToken } = parseCookies(ctx)

    if (!accessToken) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      }
    }

    if (options) {
      // 
    }

    return await fn(ctx)
  }
}