import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVnpayBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodVnpayBlackIcon',
  component: PaymentMethodVnpayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVnpayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVnpayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
