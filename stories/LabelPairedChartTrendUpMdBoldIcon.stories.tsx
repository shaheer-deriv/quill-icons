import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendUpMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendUpMdBoldIcon',
  component: LabelPairedChartTrendUpMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendUpMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendUpMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
