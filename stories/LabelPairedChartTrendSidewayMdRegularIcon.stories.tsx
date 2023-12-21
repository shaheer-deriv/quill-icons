import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartTrendSidewayMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartTrendSidewayMdRegularIcon',
  component: LabelPairedChartTrendSidewayMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartTrendSidewayMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartTrendSidewayMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
