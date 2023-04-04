import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from '@storybook/react'
import TabItem from './TabItem'

export default {
  title: 'Molecules/TabItem',
  component: TabItem,
} as ComponentMeta<typeof TabItem>

export const SelectedTabItem: ComponentStoryObj<typeof TabItem> = {
  args: {
    isSelected: true,
    label: '総人口',
  },
}

export const UnselectedTabItem: ComponentStoryObj<typeof TabItem> = {
  args: {
    isSelected: false,
    label: '総人口',
  },
}
