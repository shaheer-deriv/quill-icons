import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendUpRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendUpRegularIcon',
  component: LabelPairedChartTrendUpRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendUpRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendUpRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
