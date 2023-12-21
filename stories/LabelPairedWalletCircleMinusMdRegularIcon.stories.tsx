import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedWalletCircleMinusMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedWalletCircleMinusMdRegularIcon',
  component: LabelPairedWalletCircleMinusMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedWalletCircleMinusMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedWalletCircleMinusMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
