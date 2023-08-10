import { Provider } from '@radix-ui/react-toast'
import { ComponentProps, ReactNode } from 'react'

export interface ToastProviderProps extends ComponentProps<typeof Provider> {
    children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
    return <Provider>{children}</Provider>
}
