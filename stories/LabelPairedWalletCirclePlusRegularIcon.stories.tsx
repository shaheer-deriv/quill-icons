import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCirclePlusRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCirclePlusRegularIcon',
  component: LabelPairedWalletCirclePlusRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCirclePlusRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCirclePlusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
