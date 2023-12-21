import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowLeftToLineMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowLeftToLineMdBoldIcon',
  component: LabelPairedArrowLeftToLineMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowLeftToLineMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowLeftToLineMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
