import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPagoEfectivoBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPagoEfectivoBrandIcon',
  component: PaymentMethodPagoEfectivoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPagoEfectivoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPagoEfectivoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
