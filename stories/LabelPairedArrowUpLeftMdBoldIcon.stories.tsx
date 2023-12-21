import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpLeftMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpLeftMdBoldIcon',
  component: LabelPairedArrowUpLeftMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpLeftMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpLeftMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
