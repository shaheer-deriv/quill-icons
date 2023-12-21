import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusMdBoldIcon',
  component: LabelPairedWalletCirclePlusMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
