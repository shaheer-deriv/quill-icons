import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowUpLeftMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowUpLeftMdBoldIcon',
  component: LabelPairedCircleArrowUpLeftMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowUpLeftMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowUpLeftMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
