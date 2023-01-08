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

      <h2>Success</h2>
      <div className="flex gap-3">
        <BaseButton color="success">
          <BaseButton.Addon>
            <LeftIcon />
          </BaseButton.Addon>
          Button
          <BaseButton.Addon>
            <RightIcon />
          </BaseButton.Addon>
        </BaseButton>
        <BaseButton color="success" variant="outlined">
          Outlined
        </BaseButton>
        <BaseButton color="success" variant="ghost">
          Ghost
        </BaseButton>
        <BaseButton color="success" disabled>
          Disabled
        </BaseButton>
        <BaseButton color="success">
          <LeftIcon />
        </BaseButton>
      </div>

      <h2>Warning</h2>
      <div className="flex gap-3">
        <BaseButton color="warning">
          <BaseButton.Addon>
            <LeftIcon />
          </BaseButton.Addon>
          Button
          <BaseButton.Addon>
            <RightIcon />
          </BaseButton.Addon>
        </BaseButton>
        <BaseButton color="warning" variant="outlined">
          Outlined
        </BaseButton>
        <BaseButton color="warning" variant="ghost">
          Ghost
        </BaseButton>
        <BaseButton color="warning" disabled>
          Disabled
        </BaseButton>
        <BaseButton color="warning">
          <LeftIcon />
        </BaseButton>
      </div>

      <h2>Error</h2>
      <div className="flex gap-3">
        <BaseButton color="error">
          <BaseButton.Addon>
            <LeftIcon />
          </BaseButton.Addon>
          Button
          <BaseButton.Addon>
            <RightIcon />
          </BaseButton.Addon>
        </BaseButton>
        <BaseButton color="error" variant="outlined">
          Outlined
        </BaseButton>
        <BaseButton color="error" variant="ghost">
          Ghost
        </BaseButton>
        <BaseButton color="error" disabled>
          Disabled
        </BaseButton>
        <BaseButton color="error">
          <LeftIcon />
        </BaseButton>
      </div>
    </div>
  )
}

export default Colors
