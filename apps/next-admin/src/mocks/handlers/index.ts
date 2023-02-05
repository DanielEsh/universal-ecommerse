import { rest } from 'msw'
import { test } from './test'
import brandsData from './brandsData.json'

export const handlers = [
  // rest.get('https://my.backend/book', (_req, res, ctx) => {
  //   return res(ctx.json(test))
  // }),
  readAllBrands(),
  readBrandBySlug(),
]

function readAllBrands() {
  return rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(ctx.json(brandsData))
  })
}

function readBrandBySlug() {
  return rest.get('https://my.backend/book/:slug', async (req, res, ctx) => {
    const slug = req.params.slug

    const brand = brandsData.find((brand) => brand.slug === slug)

    if (!brand) {
      return res(
        ctx.status(404),
        ctx.json({
          message: `Brand not found`,
        }),
      )
    }

    return res(ctx.json(brand))
  })
}
