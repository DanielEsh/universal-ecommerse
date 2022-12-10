import { PropsWithChildren } from 'react'
import { BaseButton } from './Button'

export const GroupedButton = BaseButton

export const ButtonGroup = ({ children }: PropsWithChildren) => {
  return (
    <div
      role="group"
      className="inline-flex rounded-md shadow-sm border border-secondary-500">
      <BaseButton className="ripple-root rounded-l py-2 px-4 border-r border-secondary-500">
        Button 1
      </BaseButton>
      <BaseButton className="ripple-root rounded-none py-2 px-4 border-r border-secondary-500">
        Button 2
      </BaseButton>
      <BaseButton className="ripple-root rounded-none py-2 px-4 border-r border-secondary-500">
        Button 2
      </BaseButton>
      <BaseButton className="ripple-root rounded-r py-2 px-4">
        Button 3
      </BaseButton>
    </div>
  )
}
