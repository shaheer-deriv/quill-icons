import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaBrandDarkIcon',
  component: PaymentMethodVisaBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
