import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpRightFromSquareMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpRightFromSquareMdBoldIcon',
  component: LabelPairedArrowUpRightFromSquareMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpRightFromSquareMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpRightFromSquareMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
