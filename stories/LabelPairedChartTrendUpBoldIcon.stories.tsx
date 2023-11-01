import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendUpBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendUpBoldIcon',
  component: LabelPairedChartTrendUpBoldIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendUpBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendUpBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
