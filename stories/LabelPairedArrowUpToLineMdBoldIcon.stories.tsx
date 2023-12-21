import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpToLineMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpToLineMdBoldIcon',
  component: LabelPairedArrowUpToLineMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpToLineMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpToLineMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
