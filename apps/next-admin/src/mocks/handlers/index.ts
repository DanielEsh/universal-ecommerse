import { rest } from 'msw'
import { test } from './test'
import brandsData from './brandsData.json'

export const handlers = [
  // rest.get('https://my.backend/book', (_req, res, ctx) => {
  //   return res(ctx.json(test))
  // }),
  rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(ctx.json(brandsData))
  }),
]
