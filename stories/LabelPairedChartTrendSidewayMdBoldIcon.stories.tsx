import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewayMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewayMdBoldIcon',
  component: LabelPairedChartTrendSidewayMdBoldIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabelPairedChartTrendSidewayMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewayMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
