import React from 'react'

type Props = {
    name: string
}

export const BrandHeader = ({ name }: Props) => {
    return <div>Информация о товаре: {name}</div>
}
