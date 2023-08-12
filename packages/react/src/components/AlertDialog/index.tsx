import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogTitle,
    AlertDialogOverlay,
    AlertDialogPortal,
    AlertDialogRoot,
    AlertDialogTrigger,
    AlertBox,
    Flex,
} from './styles'
import { ComponentProps, ReactNode, useState } from 'react'
import { Button } from '../Button'
import { Text } from '../Text'
import { Heading } from '../Heading'

export interface AlertDialogProps
    extends ComponentProps<typeof RadixAlertDialog.Root> {
    trigger: ReactNode
    title: string
    description: string
    cancelButton: string
    confirmButton: string
}

export function AlertDialog({
    trigger,
    title,
    description,
    cancelButton,
    confirmButton,
    ...props
}: AlertDialogProps) {
    const [cancelFocus, setCancelFocus] = useState(true)
    const cancelOnFocus = () => {
        setCancelFocus(true)
        setConfirmFocus(false)
    }

    const [confirmFocus, setConfirmFocus] = useState(true)
    const confirmlOnFocus = () => {
        setConfirmFocus(true)
        setCancelFocus(false)
    }

    return (
        <AlertDialogRoot>
            <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
            <AlertDialogPortal>
                <AlertDialogOverlay />
                <AlertDialogContent asChild>
                    <AlertBox>
                        <AlertDialogTitle asChild>
                            <Heading size={'sm'}>{title}</Heading>
                        </AlertDialogTitle>
                        <AlertDialogDescription asChild>
                            <Text size={'md'}>{description}</Text>
                        </AlertDialogDescription>
                        <Flex>
                            <AlertDialogCancel asChild>
                                <Button
                                    onFocus={cancelOnFocus}
                                    variant={
                                        cancelFocus ? 'danger' : 'tertiary'
                                    }
                                >
                                    {cancelButton}
                                </Button>
                            </AlertDialogCancel>
                            <AlertDialogAction asChild>
                                <Button
                                    onFocus={confirmlOnFocus}
                                    variant={
                                        confirmFocus ? 'primary' : 'tertiary'
                                    }
                                >
                                    {confirmButton}
                                </Button>
                            </AlertDialogAction>
                        </Flex>
                    </AlertBox>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialogRoot>
    )
}
