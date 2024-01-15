import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVnpayWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodVnpayWhiteIcon',
  component: PaymentMethodVnpayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVnpayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVnpayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
