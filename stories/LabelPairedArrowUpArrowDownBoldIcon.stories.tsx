import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowUpArrowDownBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowUpArrowDownBoldIcon',
  component: LabelPairedArrowUpArrowDownBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowUpArrowDownBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowUpArrowDownBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
