import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedCashRegisterMdRegularIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedCashRegisterMdRegularIcon',
  component: LabelPairedCashRegisterMdRegularIcon,
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
} satisfies Meta<typeof LabelPairedCashRegisterMdRegularIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedCashRegisterMdRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
