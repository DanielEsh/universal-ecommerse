/*

create
--------------------------------------------------------------------------

const HeaderSlot = createSlot('header')
const FooterSlot = createSlot('footer')

export const SlotRoot = (props: Props) => {
  const slots = useSlots(props)

  const header = slots.get(HeaderSlot)
  const footer = slots.get(FooterSlot)

  return (
    <div>
      <header>{header?.rendered}</header>

      <main>{slots.children}</main>

      <footer>{footer?.rendered}</footer>
    </div>
  )
}


usage
--------------------------------------------------------------------------
export const Default: Story = () => {
  return (
    <Example>
      <HeaderSlot>
        <h1>Here might be a page title</h1>
      </HeaderSlot>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <FooterSlot>
        <p>Here&apos;s some contact info</p>
      </FooterSlot>
    </Example>
  )
}
 */
