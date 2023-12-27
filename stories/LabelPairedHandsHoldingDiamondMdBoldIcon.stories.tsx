import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedHandsHoldingDiamondMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedHandsHoldingDiamondMdBoldIcon',
  component: LabelPairedHandsHoldingDiamondMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedHandsHoldingDiamondMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedHandsHoldingDiamondMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
