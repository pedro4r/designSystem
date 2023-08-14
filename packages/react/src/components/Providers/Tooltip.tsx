import { Provider } from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export interface TooltipProviderProps extends ComponentProps<typeof Provider> {
    children: ReactNode
}

export function TooltipProvider({ children }: TooltipProviderProps) {
    return <RadixTooltip.Provider>{children} </RadixTooltip.Provider>
}
