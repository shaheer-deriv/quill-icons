import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewayBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewayBoldIcon',
  component: LabelPairedChartTrendSidewayBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendSidewayBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewayBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
