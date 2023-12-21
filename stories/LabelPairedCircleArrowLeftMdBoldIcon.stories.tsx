import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleArrowLeftMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleArrowLeftMdBoldIcon',
  component: LabelPairedCircleArrowLeftMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleArrowLeftMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleArrowLeftMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
