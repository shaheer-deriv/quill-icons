import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedEllipsisVerticalBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedEllipsisVerticalBoldIcon',
  component: LabelPairedEllipsisVerticalBoldIcon,
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
} satisfies Meta<typeof LabelPairedEllipsisVerticalBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedEllipsisVerticalBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
