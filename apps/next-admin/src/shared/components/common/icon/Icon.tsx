import Chart from 'public/icons/Chart.svg'

type IconProps = {
  name: string
}

const iconsList: any = {
  chart: Chart,
}

export const Icon = ({ name, ...props }: IconProps) => {
  const IconName = iconsList[name]
  return <IconName {...props} />
}
