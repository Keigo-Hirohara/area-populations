import { ComponentMeta, ComponentStory } from '@storybook/react'
import Label from './Label'

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const LabelStory = Template.bind({})

LabelStory.args = {
  label: '千葉県',
}
