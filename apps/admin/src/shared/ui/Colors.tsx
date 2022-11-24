const COMPONENT_NAME = 'component'

const colors: any = {
    primary: {
        500: 'var(--primary-500)',
        400: 'var(--primary-400)',
        300: 'var(--primary-300)',
        200: 'var(--primary-200)',
        100: 'var(--primary-100)',
    },
    secondary: {
        500: 'var(--secondary-500)',
        400: 'var(--secondary-400)',
        300: 'var(--secondary-300)',
        200: 'var(--secondary-200)',
        100: 'var(--secondary-100)',
    },
}

const renderColors = () => {
    return (
        <div>
            {Object.keys(colors).map((color) => {
                return (
                    <>
                        <div>{color}</div>
                        {Object.keys(colors[color]).map((colorNumber) => {
                            return (
                                <div style={{background: colors[color][colorNumber]}} >
                                    {colorNumber} : {colors[color][colorNumber]}
                                </div>
                            )
                        })}
                    </>
                )
            })}
        </div>
    )
}

export const Colors = () => {
    return <pre>{renderColors()}</pre>
}

Colors.displayName = COMPONENT_NAME
