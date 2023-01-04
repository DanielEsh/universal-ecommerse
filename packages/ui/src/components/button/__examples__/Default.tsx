import { BaseButton } from '../Button'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LeftIcon } from '../../../../../icons/dist/cjs/index'

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
