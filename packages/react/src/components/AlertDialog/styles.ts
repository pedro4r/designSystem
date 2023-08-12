import { keyframes, styled } from '../../styles'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'
import { Box } from '../Box'

const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
})

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const AlertDialogRoot = styled(RadixAlertDialog.Root, {})

export const AlertDialogTrigger = styled(RadixAlertDialog.Trigger, {
    all: 'unset',
})

export const AlertDialogPortal = styled(RadixAlertDialog.Portal, {})

export const AlertDialogOverlay = styled(RadixAlertDialog.Overlay, {
    backgroundColor: '$gray600',
    position: 'fixed',
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
})

export const AlertDialogContent = styled(RadixAlertDialog.Content, {})

export const AlertBox = styled(Box, {
    boxShadow:
        'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '500px',
    maxHeight: '85vh',
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' },
})

export const AlertDialogTitle = styled(RadixAlertDialog.Title, {
    marginBottom: '$2',
    color: '$white',
})

export const AlertDialogDescription = styled(RadixAlertDialog.Description, {
    marginBottom: '$6',
    color: '$gray400',
    fontSize: 15,
    lineHeight: 1.5,
})

export const Flex = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '$2',
})

export const AlertDialogCancel = styled(RadixAlertDialog.Cancel, {})

export const AlertDialogAction = styled(RadixAlertDialog.Action, {})
