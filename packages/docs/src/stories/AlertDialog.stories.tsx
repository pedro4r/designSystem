import type { StoryObj, Meta } from '@storybook/react'
import { Button, AlertDialog, AlertDialogProps } from '@jupiter-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Data display/Alert Dialog',
  component: AlertDialog,
  args: {
    trigger: <Button variant="secondary">Open alert</Button>,
    title: 'Title content',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure facere in magnam laboriosam, fuga nesciunt.',
    cancelButton: 'Cancel Text',
    confirmButton: 'Confirm Text',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
} as Meta<AlertDialogProps>

export const Primary: StoryObj<AlertDialogProps> = {}
