import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChartLineMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChartLineMdRegularIcon',
  component: LabelPairedChartLineMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedChartLineMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChartLineMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
