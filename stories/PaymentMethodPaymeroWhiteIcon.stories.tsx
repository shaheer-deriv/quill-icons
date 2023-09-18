import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymeroWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymeroWhiteIcon',
  component: PaymentMethodPaymeroWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymeroWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymeroWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
