import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedFileChartColumnMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedFileChartColumnMdRegularIcon',
  component: LabelPairedFileChartColumnMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedFileChartColumnMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedFileChartColumnMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
