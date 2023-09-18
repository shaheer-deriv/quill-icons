import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonpayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonpayBlackIcon',
  component: PaymentMethodDragonpayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonpayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonpayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
