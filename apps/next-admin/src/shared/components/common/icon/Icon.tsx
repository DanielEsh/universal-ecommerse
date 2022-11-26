import Chart from 'public/icons/Chart.svg'

type IconProps = {
    name: string
}

const iconsList: any = {
    chart: Chart,
}

export const Icon = ({ name, ...props }: IconProps) => {
    let IconName = iconsList[name]
    return <IconName {...props} />
};
