import { useState, FormEvent } from 'react';

import { createBrand } from '../service/brands.service';

import { BaseInput } from './ui/inputs/BaseInput'
import { Button } from './ui/Button';

type Props = {
    onSuccess: () => void
}

export const BrandsCreateForm = ({onSuccess}: Props) => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    const onChangeName = (value: string) => {
        setName(value)
    }

    const onChangeDescription = (value: string) => {
        setDescription(value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createBrand({ name, description})
        onSuccess();
    }

    return (
        <form 
            className="flex flex-col gap-6"
            onSubmit={onSubmit}
        >
            <div className="w-[380px]">
                <BaseInput 
                    label="Name"
                    onChange={onChangeName}
                />
            </div>

            <div className="w-[380px]">
                <BaseInput 
                    label="Description"
                    onChange={onChangeDescription}
                />
            </div>
            

            <div className="w-[380px]">
                <Button 
                    type="submit"
                >
                    Добавить
                </Button>
            </div>
        </form>
    )
}
