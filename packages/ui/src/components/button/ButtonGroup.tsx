import { PropsWithChildren } from 'react'
import { BaseButton } from './Button'

export const GroupedButton = BaseButton

export const ButtonGroup = ({ children }: PropsWithChildren) => {
  return (
    <div role="group" className="inline-flex rounded-md shadow-sm">
      <BaseButton className="ripple-root bg-black text-white rounded-l py-4 px-8">
        Button 1
      </BaseButton>
      <BaseButton className="ripple-root bg-black text-white rounded-none py-4 px-8">
        Button 2
      </BaseButton>
      <BaseButton className="ripple-root bg-black text-white rounded-r py-4 px-8">
        Button 3
      </BaseButton>
    </div>
  )
}
