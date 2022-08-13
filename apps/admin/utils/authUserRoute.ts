import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { parseCookies } from "./cookies";
import {REFRESH_TOKEN} from "./constants";

export function authUserRoute(func: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx.req)
    const token = cookies[REFRESH_TOKEN]

    if (!token) {
      // return {
      //   redirect: {
      //     permanent: false,
      //     destination: '/auth/',
      //   },
      // };
    }

    // @ts-ignore
    return await func(ctx, token)
  }
}
