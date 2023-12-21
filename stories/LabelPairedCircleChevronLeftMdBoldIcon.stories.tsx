import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCircleChevronLeftMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCircleChevronLeftMdBoldIcon',
  component: LabelPairedCircleChevronLeftMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCircleChevronLeftMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCircleChevronLeftMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
