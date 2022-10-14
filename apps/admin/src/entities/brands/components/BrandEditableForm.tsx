import { FormEvent } from 'react'
import { BaseInput } from '@/src/shared/ui/inputs/BaseInput'

import { BrandType } from '../../../../service/brands.service'

type Props = {
    brandData: BrandType
}

export const BrandEditableForm = ({ brandData }: Props) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Submit')
    }

    return (
        <form className="flex flex-col gap-4 h-full" onSubmit={handleSubmit}>
            <div className="w-[380px]">
                <BaseInput label="Name" defaultValue={brandData.name} />
            </div>
            <div className="w-[380px]">
                <BaseInput
                    label="Description"
                    defaultValue={brandData.description}
                />
            </div>
        </form>
    )
}
