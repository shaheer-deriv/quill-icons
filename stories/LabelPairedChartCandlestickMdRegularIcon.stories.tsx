import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartCandlestickMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartCandlestickMdRegularIcon',
  component: LabelPairedChartCandlestickMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartCandlestickMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartCandlestickMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
