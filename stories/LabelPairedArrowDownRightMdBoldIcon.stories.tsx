import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedArrowDownRightMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedArrowDownRightMdBoldIcon',
  component: LabelPairedArrowDownRightMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedArrowDownRightMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedArrowDownRightMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
