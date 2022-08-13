import { useState, FormEvent } from 'react';

import { createBrand } from '../service/brands.service';

import { BaseInput } from './ui/inputs/BaseInput'
import { Button } from './ui/Button';

export const BrandCreator = () => {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    const onChangeName = (value: string) => {
        setName(value)
    }

    const onChangeDescription = (value: string) => {
        setName(value)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('submit', name);
        createBrand({ name: name, description: description})
    }

    return (
        <form onSubmit={onSubmit}>
            CREATOR

            <BaseInput 
                label="Name"
                onChange={onChangeName}
            />
            <BaseInput 
                label="Description"
                onChange={onChangeDescription}
            />

            <Button 
                type="submit"
            >
                Submit
            </Button>
        </form>
    )
}
