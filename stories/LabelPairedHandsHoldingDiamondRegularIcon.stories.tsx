import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondRegularIcon } from '../src/react/System/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondRegularIcon',
  component: LabelPairedHandsHoldingDiamondRegularIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
