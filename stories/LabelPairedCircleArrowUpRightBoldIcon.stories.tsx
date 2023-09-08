import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpRightBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpRightBoldIcon',
  component: LabelPairedCircleArrowUpRightBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpRightBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpRightBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
