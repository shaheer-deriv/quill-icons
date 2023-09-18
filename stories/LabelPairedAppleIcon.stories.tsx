import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedAppleIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedAppleIcon',
  component: LabelPairedAppleIcon,
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
} satisfies Meta<typeof LabelPairedAppleIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedAppleIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
