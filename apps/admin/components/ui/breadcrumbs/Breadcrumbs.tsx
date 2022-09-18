import ChevronRightIcon from 'public/icons/chevron-right.svg'

export const Breadcrumbs = () => {
    return (
        <nav className="bg-grey-light rounded-md w-full">
            <ol className="list-reset flex items-center gap-3">
                <li>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        Home
                    </a>
                </li>
                <li aria-hidden="true">
                    <div className="text-gray-800">
                        <ChevronRightIcon />
                    </div>
                </li>
                <li>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                        Library
                    </a>
                </li>
                <li aria-hidden="true">
                    <div className="text-gray-500">
                        <ChevronRightIcon />
                    </div>
                </li>
                <li className="text-black">Data</li>
            </ol>
        </nav>
    )
}
