import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVnpayBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodVnpayBrandIcon',
  component: PaymentMethodVnpayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVnpayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVnpayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
