import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedChevronsUpMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedChevronsUpMdBoldIcon',
  component: LabelPairedChevronsUpMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedChevronsUpMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedChevronsUpMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
