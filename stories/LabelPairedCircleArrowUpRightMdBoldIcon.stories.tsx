import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpRightMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpRightMdBoldIcon',
  component: LabelPairedCircleArrowUpRightMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpRightMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpRightMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
