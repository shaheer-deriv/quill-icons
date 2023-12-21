import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowRightArrowLeftMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowRightArrowLeftMdBoldIcon',
  component: LabelPairedArrowRightArrowLeftMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowRightArrowLeftMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowRightArrowLeftMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
