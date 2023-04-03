import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Label from './Label'

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>

export const Default: ComponentStoryObj<typeof Label> = {
  args: {
    label: '千葉県',
  },
}
