import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartOhlcMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartOhlcMdBoldIcon',
  component: LabelPairedChartOhlcMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartOhlcMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartOhlcMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
