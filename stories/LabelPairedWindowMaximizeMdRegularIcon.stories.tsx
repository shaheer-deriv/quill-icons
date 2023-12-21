import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowMaximizeMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowMaximizeMdRegularIcon',
  component: LabelPairedWindowMaximizeMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedWindowMaximizeMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowMaximizeMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
