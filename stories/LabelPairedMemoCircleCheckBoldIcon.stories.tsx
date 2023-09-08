import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedMemoCircleCheckBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedMemoCircleCheckBoldIcon',
  component: LabelPairedMemoCircleCheckBoldIcon,
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
} satisfies Meta<typeof LabelPairedMemoCircleCheckBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedMemoCircleCheckBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
