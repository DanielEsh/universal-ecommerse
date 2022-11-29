import { rest } from 'msw'

export const handlers = [
    rest.get('https://my.backend/book', (_req, res, ctx) => {
        return res(
            ctx.json([
                {
                    "id": 1,
                    "name": "test1",
                    "description": "description1"
                },
                {
                    "id": 2,
                    "name": "test2",
                    "description": "description2"
                },
                {
                    "id": 3,
                    "name": "test3",
                    "description": "description3"
                },
                {
                    "id": 4,
                    "name": "test3",
                    "description": "description3"
                },
                {
                    "id": 5,
                    "name": "test4",
                    "description": "description4"
                }
            ])
        )
    }),
    rest.get('/reviews', (_req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
                    author: 'John Maverick',
                    text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
                },
            ])
        )
    }),
]