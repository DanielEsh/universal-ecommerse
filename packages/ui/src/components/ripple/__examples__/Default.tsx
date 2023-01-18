import { Ripple } from '../Ripple'

const Default = () => {
  return (
    <div className="flex gap-4">
      <Ripple.Container className="flex items-center justify-center w-24 h-24 bg-black rounded-md text-white">
        children
        <Ripple />
      </Ripple.Container>

      <Ripple.Container className="flex items-center justify-center w-[400px] h-[400px] bg-black rounded-md text-white">
        children
        <Ripple />
      </Ripple.Container>

      {/* <div className="ripple-root flex items-center justify-center w-24 h-24 bg-black rounded-md text-white">
        400x400
        <Ripple />
      </div> */}
    </div>
  )
}

export default Default
