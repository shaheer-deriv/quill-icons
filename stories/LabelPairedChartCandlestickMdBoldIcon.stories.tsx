import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartCandlestickMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartCandlestickMdBoldIcon',
  component: LabelPairedChartCandlestickMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartCandlestickMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartCandlestickMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
