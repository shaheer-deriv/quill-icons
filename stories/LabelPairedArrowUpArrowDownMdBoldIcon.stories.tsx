import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownMdBoldIcon',
  component: LabelPairedArrowUpArrowDownMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
