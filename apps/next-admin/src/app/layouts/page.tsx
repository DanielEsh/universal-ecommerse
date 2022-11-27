export default async function Layout() {
    const res = await fetch('http://localhost:8000/api/test')
    const data = await res.json()

    return (
        <div>
            <div>
                {data.map((item) => <div>{item.label}</div>)}
                <button>click</button>
            </div>
        </div>
    )
}
