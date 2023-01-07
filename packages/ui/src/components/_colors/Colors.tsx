import test from '../../../tailwind.config'

export const Colors = () => {
  // console.log('theme', test.theme?.extend?.colors)

  const COLORS = test.theme?.extend?.colors ?? []

  const render: any = []

  const t = Object.keys(COLORS).map((colorName) => {
    console.log('item', COLORS[colorName])
    Object.keys(COLORS[colorName]).map((colorValue) => {
      console.log('NAME', colorValue)
      console.log('value', COLORS[colorName][colorValue])

      return render.push({
        name: colorName,
        value: colorValue,
        style: COLORS[colorName][colorValue],
      })
    })
  })

  console.log('render', render)

  return (
    <div>
      <h1 className="text-2xl">Colors</h1>
      <div className="mt-4">
        {/* {render.map((color, key) => (
          <div key={key} style={{ background: color.style }} className="w-64">
            {color.name} {color.value}
          </div>
        ))} */}

        <div className="w-64">
          <h2 className="text-lg">Primary</h2>
          <div className="bg-primary-500">123</div>
          <div className="bg-primary-400">123</div>
          <div className="bg-primary-300">123</div>
          <div className="bg-primary-200">123</div>
          <div className="bg-primary-100">123</div>
        </div>

        <div className="w-64">
          <h2 className="text-lg">Primary</h2>
          <div className="bg-primary-500">123</div>
          <div className="bg-primary-400">123</div>
          <div className="bg-primary-300">123</div>
          <div className="bg-primary-200">123</div>
          <div className="bg-primary-100">123</div>
        </div>
      </div>
    </div>
  )
}
