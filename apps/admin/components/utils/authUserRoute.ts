// import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { ACCESS_TOKEN, clearCookies, isTokenExpired, parseCookies } from "../../utils/cookies";

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

export function authUserRoute(func: any) {
  return async (ctx: any) => {
    const cookies = parseCookies(ctx.req)
    const accessToken = cookies[ACCESS_TOKEN]

    if (!accessToken || isTokenExpired(accessToken)) {
      clearCookies()

      return {
        redirect: {
          permanent: false,
          destination: "/auth/",
        },
      };
    }

    return func(ctx, accessToken)
  }
}
