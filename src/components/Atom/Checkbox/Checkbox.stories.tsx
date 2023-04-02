import Checkbox from './Checkbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = () => <Checkbox />

export const CheckboxStory = Template.bind({})
