import { ButtonGroup, GroupedButton } from '../ButtonGroup'

export default function () {
  return (
    <div>
      <ButtonGroup>
        <GroupedButton
          className="rounded-r-none border-r border-black"
          variant="outlined">
          Button 1
        </GroupedButton>
        <GroupedButton
          className="rounded-none border-r border-black"
          variant="outlined">
          Button 2
        </GroupedButton>
        <GroupedButton
          className="rounded-none border-r border-black"
          variant="outlined">
          Button 2
        </GroupedButton>
        <GroupedButton
          className="rounded-l-none border-r border-black"
          variant="outlined">
          Button 3
        </GroupedButton>
      </ButtonGroup>
    </div>
  )
}
