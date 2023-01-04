import test from '../../../tailwind.config'

export const Colors = () => {
  //   console.log('theme', test.theme?.extend?.colors)

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
      <div>
        {render.map((color) => (
          <div style={{ background: color.style }}>
            {color.name} {color.value}
          </div>
        ))}
      </div>
    </div>
  )
}
