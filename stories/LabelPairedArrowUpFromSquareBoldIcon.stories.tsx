import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromSquareBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromSquareBoldIcon',
  component: LabelPairedArrowUpFromSquareBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromSquareBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromSquareBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
