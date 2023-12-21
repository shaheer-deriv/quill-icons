import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedClockThreeMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedClockThreeMdBoldIcon',
  component: LabelPairedClockThreeMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedClockThreeMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedClockThreeMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
