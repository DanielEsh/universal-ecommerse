import { ButtonGroup, GroupedButton } from '../ButtonGroup'

export default function () {
  return (
    <div className="inline-flex flex-col gap-3">
      <ButtonGroup>
        <GroupedButton variant="outlined">Button 1</GroupedButton>
        <GroupedButton variant="outlined">Button 2</GroupedButton>
        <GroupedButton variant="outlined">Button 2</GroupedButton>
        <GroupedButton variant="outlined">Button 3</GroupedButton>
      </ButtonGroup>

      <ButtonGroup>
        <GroupedButton>Button 1</GroupedButton>
        <GroupedButton>Button 2</GroupedButton>
        <GroupedButton>Button 2</GroupedButton>
        <GroupedButton>Button 3</GroupedButton>
      </ButtonGroup>

      <ButtonGroup className="test classes">
        <GroupedButton variant="ghost">Button 1</GroupedButton>
        <GroupedButton variant="ghost">Button 2</GroupedButton>
        <GroupedButton variant="ghost">Button 2</GroupedButton>
        <GroupedButton variant="ghost">Button 3</GroupedButton>
      </ButtonGroup>

      <ButtonGroup className="w-[200px]" direction="vertical">
        <GroupedButton>Button 1</GroupedButton>
        <GroupedButton>Button 2</GroupedButton>
        <GroupedButton>Button 2</GroupedButton>
        <GroupedButton>Button 3</GroupedButton>
      </ButtonGroup>

      <ButtonGroup className="w-[200px]" direction="vertical">
        <GroupedButton variant="outlined">Button 1</GroupedButton>
        <GroupedButton variant="outlined">Button 2</GroupedButton>
        <GroupedButton variant="outlined">Button 2</GroupedButton>
        <GroupedButton variant="outlined">Button 3</GroupedButton>
      </ButtonGroup>

      <ButtonGroup className="w-[200px]" direction="vertical">
        <GroupedButton variant="ghost">Button 1</GroupedButton>
        <GroupedButton variant="ghost">Button 2</GroupedButton>
        <GroupedButton variant="ghost">Button 2</GroupedButton>
        <GroupedButton variant="ghost">Button 3</GroupedButton>
      </ButtonGroup>
    </div>
  )
}
