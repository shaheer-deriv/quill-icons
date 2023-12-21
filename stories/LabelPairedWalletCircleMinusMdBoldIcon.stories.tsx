import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusMdBoldIcon',
  component: LabelPairedWalletCircleMinusMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
