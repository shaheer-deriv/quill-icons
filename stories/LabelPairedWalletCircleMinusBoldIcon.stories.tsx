import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusBoldIcon',
  component: LabelPairedWalletCircleMinusBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
