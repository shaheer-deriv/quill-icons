import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymeroBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymeroBlackIcon',
  component: PaymentMethodPaymeroBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymeroBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymeroBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
