import { Ripple } from '../Ripple'

const Default = () => {
  return (
    <div className="flex gap-4">
      <div className="ripple-root flex items-center justify-center w-24 h-24 bg-black rounded-md text-white">
        96x96
        <Ripple />
      </div>

      <div className="ripple-root flex items-center justify-center w-24 h-24 bg-black rounded-md text-white">
        400x400
        <Ripple />
      </div>
    </div>
  )
}

export default Default
