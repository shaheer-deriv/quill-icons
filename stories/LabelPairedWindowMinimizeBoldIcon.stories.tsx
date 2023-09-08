import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMinimizeBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMinimizeBoldIcon',
  component: LabelPairedWindowMinimizeBoldIcon,
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
} satisfies Meta<typeof LabelPairedWindowMinimizeBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMinimizeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
