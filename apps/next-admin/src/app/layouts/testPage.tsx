'use client'
import { getCurrentUser } from "@/src/shared/api/user";

export const TestPage = () => {

    const handleFetch = async () => {
        const {data} = await getCurrentUser();
        console.log('DATA', data);
    }

    return (
        <div>
            Test component

            <button onClick={handleFetch}>fetch</button>
        </div>
    )
}