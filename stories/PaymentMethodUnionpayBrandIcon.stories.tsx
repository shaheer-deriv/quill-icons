import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodUnionpayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodUnionpayBrandIcon',
  component: PaymentMethodUnionpayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodUnionpayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodUnionpayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
