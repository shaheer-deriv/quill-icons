import type { Meta, StoryObj } from '@storybook/react';

import { LabelPairedApplePayMdIcon } from '../src/react/LabelPaired';

const meta = {
  title: 'label-paired/LabelPairedApplePayMdIcon',
  component: LabelPairedApplePayMdIcon,
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
} satisfies Meta<typeof LabelPairedApplePayMdIcon>;

export default meta;

type Story = StoryObj<typeof LabelPairedApplePayMdIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
