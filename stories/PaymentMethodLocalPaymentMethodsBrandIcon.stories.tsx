import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalPaymentMethodsBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLocalPaymentMethodsBrandIcon',
  component: PaymentMethodLocalPaymentMethodsBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalPaymentMethodsBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalPaymentMethodsBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
