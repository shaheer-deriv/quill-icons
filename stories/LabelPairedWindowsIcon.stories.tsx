import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWindowsIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWindowsIcon',
  component: LabelPairedWindowsIcon,
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
} satisfies Meta<typeof LabelPairedWindowsIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWindowsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
