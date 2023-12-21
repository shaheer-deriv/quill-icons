import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowDownLeftMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowDownLeftMdBoldIcon',
  component: LabelPairedCircleArrowDownLeftMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowDownLeftMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowDownLeftMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
