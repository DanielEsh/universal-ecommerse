import { BaseButton } from '../Button'

const Variant = () => {
  return (
    <div className="inline-flex flex-col gap-3">
      <BaseButton>Base</BaseButton>
      <BaseButton variant="outlined">Outline</BaseButton>
      <BaseButton variant="ghost">Ghost</BaseButton>
    </div>
  )
}

export default Variant
