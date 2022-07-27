import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { parseCookies } from "./cookies";

export function guestUserRoute(fn: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { refreshToken } = parseCookies(ctx)

    if (refreshToken) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }

    return await fn(ctx)
  }
}
