import Chart from 'public/icons/Chart.svg'

const iconTypes = {
    chart: Chart,
}

export const Icon = ({ name, ...props }) => {
    let IconName = iconTypes[name]
    return <IconName {...props} />
};
