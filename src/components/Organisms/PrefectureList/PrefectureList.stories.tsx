import { ComponentMeta, ComponentStory } from '@storybook/react'
import PrefectureList from './PrefectureList'

export default {
  title: 'Organisms/PrefectureList',
  component: PrefectureList,
} as ComponentMeta<typeof PrefectureList>

export const Detault: ComponentStory<typeof PrefectureList> = () => (
  <PrefectureList />
)
