import { rest } from 'msw'
import brandsData from './brandsData.json'

export const handlers = [
  createBrand(),
  readAllBrands(),
  readBrandBySlug(),
  // deleteBrandBySlug(),
]

function createBrand() {
  return rest.post('https://my.backend/book', async (_req, res, ctx) => {
    const body = await _req.json()
    const { brand } = body
    brandsData.push(brand)
    return res(ctx.json(brand))
  })
}

function readAllBrands() {
  return rest.get('https://my.backend/book', (_req, res, ctx) => {
    return res(ctx.json(brandsData))
  })
}

function readBrandBySlug() {
  return rest.get('https://my.backend/book/:slug', async (req, res, ctx) => {
    const slug = req.params.slug

    const brand = brandsData.find((brand) => brand.slug === slug)

    // if (!brand) {
    //   return res(
    //     ctx.status(404),
    //     ctx.json({
    //       message: `Brand not found`,
    //     }),
    //   )
    // }

    return res(ctx.json(brand))
  })
}

function deleteBrandBySlug() {
  rest.post('https://my.backend/book/:slug', (req, res, ctx) => {
    const slug = req.params.slug
    const blogIndex = brandsData.findIndex((brand) => brand.slug === slug)

    brandsData.splice(blogIndex, 1)

    return res(ctx.json({ message: 'Deleted successfully' }))
  })
}
