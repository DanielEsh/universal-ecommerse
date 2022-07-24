import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { clearCookies, isTokenExpired, parseCookies } from "../../utils/cookies";

type Options = {
  roles: any
}

// export function authUserRoute(fn: GetServerSideProps, options?: Options) {
//   return async (ctx: GetServerSidePropsContext) => {
//     const { accessToken } = parseCookies(ctx)
//
//     if (!accessToken) {
//       console.log('AA');
//       return {
//         redirect: {
//           destination: '/auth',
//           permanent: false
//         }
//       }
//     }
//
//     if (options) {
//       //
//     }
//
//     return await fn(ctx)
//   }
// }

const ACCESS_TOKEN = 'accessToken';

export function authUserRoute(func: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx.req)
    const accessToken = cookies[ACCESS_TOKEN]

    if (!accessToken) {
      return {
        redirect: {
          permanent: false,
          destination: '/auth/',
        },
      };
    }

    // @ts-ignore
    return await func(ctx, accessToken)
  }
}
