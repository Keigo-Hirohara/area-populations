import Checkbox from './Checkbox'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = () => <Checkbox />
