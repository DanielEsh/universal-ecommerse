export const Table = () => {
    return (
        <table className="w-full">
            <caption> Caption </caption>
            <thead>
                <tr>
                    <th className="p-2 bg-blue-500 border border-stone-900">
                        Имя
                    </th>
                    <th className="p-2 bg-blue-500 border border-stone-900">
                        Описание
                    </th>
                    <th className="p-2 bg-blue-500 border border-stone-900">
                        Количество товара
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-sky-400 even:bg-gray-300">
                    <td className="p-2 border border-stone-900">
                        Имя 1 
                    </td>
                    <td className="p-2 border border-stone-900">
                        Описание 1 
                    </td>
                    <td className="p-2 border border-stone-900">
                        Количество товара 1 
                    </td>
                </tr>

                <tr className="bg-sky-400 even:bg-gray-300">
                    <td className="p-2 border border-stone-900">
                        Имя 2
                    </td>
                    <td className="p-2 border border-stone-900">
                        Описание 2
                    </td>
                    <td className="p-2 border border-stone-900">
                        Количество товара 2 
                    </td>
                </tr>

                <tr className="bg-sky-400 even:bg-gray-300">
                    <td className="p-2 border border-stone-900">
                        Имя 3
                    </td>
                    <td className="p-2 border border-stone-900">
                        Описание 3
                    </td>
                    <td className="p-2 border border-stone-900">
                        Количество товара 3 
                    </td>
                </tr>

                <tr className="bg-sky-400 even:bg-gray-300">
                    <td className="p-2 border border-stone-900">
                        Имя 4
                    </td>
                    <td className="p-2 border border-stone-900">
                        Описание 4
                    </td>
                    <td className="p-2 border border-stone-900">
                        Количество товара 4
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
