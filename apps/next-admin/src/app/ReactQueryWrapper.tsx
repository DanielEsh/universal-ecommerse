'use client';

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initMsw } from "@/src/mocks";

const queryClient = new QueryClient()

type Props = {
    children: ReactNode
}

export const ReactQueryWrapper = ({ children }: Props) => {
    initMsw();

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
}