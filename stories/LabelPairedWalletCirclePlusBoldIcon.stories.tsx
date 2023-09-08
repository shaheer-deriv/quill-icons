import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusBoldIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusBoldIcon',
  component: LabelPairedWalletCirclePlusBoldIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
