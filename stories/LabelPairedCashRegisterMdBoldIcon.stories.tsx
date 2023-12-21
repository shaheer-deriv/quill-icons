import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCashRegisterMdBoldIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCashRegisterMdBoldIcon',
  component: LabelPairedCashRegisterMdBoldIcon,
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
} satisfies Meta<typeof LabelPairedCashRegisterMdBoldIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCashRegisterMdBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
