import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedRectangleBarcodeBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedRectangleBarcodeBoldIcon',
  component: LabelPairedRectangleBarcodeBoldIcon,
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
} satisfies Meta<typeof LabelPairedRectangleBarcodeBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedRectangleBarcodeBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
