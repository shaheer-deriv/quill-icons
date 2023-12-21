import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpFromSquareMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpFromSquareMdBoldIcon',
  component: LabelPairedArrowUpFromSquareMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpFromSquareMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpFromSquareMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
