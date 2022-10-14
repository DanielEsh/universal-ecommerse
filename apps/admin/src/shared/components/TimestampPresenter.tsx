import React from 'react'
import { dateToString } from 'utils/dateToString'

type Props = {
    label: string
    date: Date
}

export const TimestampPresenter = ({ label, date }: Props) => {
    return (
        <div className="flex items-center justify-between bg-slate-200 p-4 rounded-md">
            <span>{label}</span>
            <span>{dateToString(date)}</span>
        </div>
    )
}
