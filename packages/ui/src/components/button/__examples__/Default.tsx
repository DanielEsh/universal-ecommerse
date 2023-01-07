import { BaseButton } from '../Button'

import { LeftIcon } from '../../../../../icons/dist/esm/index'

const Default = () => {
  return (
    <div>
      <BaseButton className="button">
        <BaseButton.Addon>
          <LeftIcon />
        </BaseButton.Addon>
        Button
        <BaseButton.Addon>
          <LeftIcon />
        </BaseButton.Addon>
      </BaseButton>
    </div>
  )
}

export default Default
