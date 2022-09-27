import { useState, useCallback } from 'react'

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState)

    const toggle = useCallback(() => setState((state) => !state), [])

    const toggleProps = {
        'aria-checked': state,
    }

    return [state, toggle, toggleProps]
}
