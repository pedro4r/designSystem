import type { StoryObj, Meta } from '@storybook/react'
import { space } from '@jupiter-ui/tokens'
import {
  Tooltip,
  TooltipProps,
  Button,
  TooltipProvider,
} from '@jupiter-ui/react'

// Funcina como global para todas as variantes
export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    trigger: <Button variant="secondary">Hover here</Button>,
    content: 'Text Sample',
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          <div style={{ padding: space[10] }}>{Story()}</div>
        </TooltipProvider>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
