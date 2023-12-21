import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpAZMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpAZMdBoldIcon',
  component: LabelPairedArrowUpAZMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpAZMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpAZMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
