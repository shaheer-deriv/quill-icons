import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedApplePayIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedApplePayIcon',
  component: LabelPairedApplePayIcon,
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
} satisfies Meta<typeof LabelPairedApplePayIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedApplePayIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
