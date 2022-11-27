'use client'
import { useFetchCurrentUser } from "@/src/shared/api/user/queries";

export const TestPage = () => {
    const { isLoading, data } = useFetchCurrentUser()

    const handleFetch = () => {
        console.log('data', data);
    }

    return (
        <div>
            Test component

            <button onClick={handleFetch}>fetch</button>
        </div>
    )
}