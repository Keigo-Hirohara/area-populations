import {
  ComponentMeta,
  ComponentStory,
  ComponentStoryObj,
} from '@storybook/react'
import Linegraph from './Linegraph'

export default {
  title: 'Atoms/Linegraph',
  component: Linegraph,
} as ComponentMeta<typeof Linegraph>

export const Default: ComponentStoryObj<typeof Linegraph> = {
  args: {
    data: {
      labels: [
        '2000',
        '2005',
        '2010',
        '2015',
        '2020',
        '2025',
        '2030',
        '2035',
        '2040',
      ],
      datasets: [
        {
          label: '千葉県',
          data: [
            5926285, 6056462, 6216289, 6222666, 6284480, 6118170, 5985915,
            5822882, 5645611,
          ],
        },
        {
          label: '東京都',
          data: [
            12064101, 12576601, 13159388, 13515271, 14047594, 13845936,
            13882538, 13851782, 13758624,
          ],
        },
      ],
    },
  },
}
