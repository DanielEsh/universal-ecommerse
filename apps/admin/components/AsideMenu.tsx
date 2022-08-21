export const AsideMenu = () => {
    const list = [
        {
            id: 1,
            name: 'Категории',
            slug: 'categories',
        },
        {
            id: 2,
            name: 'Бренды',
            slug: 'brands',
        },
        {
            id: 3,
            name: 'Товары',
            slug: 'goods',
        },
    ]

    return (
        <div>
            {list.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}
