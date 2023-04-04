import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import PrefectureItem from './PrefectureItem'

export default {
  title: 'Molecules/PrefectureItem',
  component: PrefectureItem,
} as ComponentMeta<typeof PrefectureItem>

export const Default: ComponentStoryObj<typeof PrefectureItem> = {
  args: {
    label: '千葉県',
  },
}
