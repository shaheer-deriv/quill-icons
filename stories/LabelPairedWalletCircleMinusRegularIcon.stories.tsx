import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusRegularIcon',
  component: LabelPairedWalletCircleMinusRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
