import { BaseButton } from '../Button'

import { LeftIcon, RightIcon } from '../../../../../icons/dist/esm/index'

const Colors = () => {
  return (
    <div>
      <h2>Primary</h2>
      <div className="flex gap-3">
        <BaseButton>
          <BaseButton.Addon>
            <LeftIcon />
          </BaseButton.Addon>
          Button
          <BaseButton.Addon>
            <RightIcon />
          </BaseButton.Addon>
        </BaseButton>
        <BaseButton variant="outlined">Outlined</BaseButton>
        <BaseButton variant="ghost">Ghost</BaseButton>
        <BaseButton disabled>Disabled</BaseButton>
        <BaseButton>
          <LeftIcon />
        </BaseButton>
      </div>

      <h2>Secondary</h2>
      <div className="flex gap-3">
        <BaseButton color="secondary">
          <BaseButton.Addon>
            <LeftIcon />
          </BaseButton.Addon>
          Button
          <BaseButton.Addon>
            <RightIcon />
          </BaseButton.Addon>
        </BaseButton>
        <BaseButton color="secondary" variant="outlined">
          Outlined
        </BaseButton>
        <BaseButton color="secondary" variant="ghost">
          Ghost
        </BaseButton>
        <BaseButton color="secondary" disabled>
          Disabled
        </BaseButton>
        <BaseButton color="secondary">
          <LeftIcon />
        </BaseButton>
      </div>
    </div>
  )
}

export default Colors
