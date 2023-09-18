import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalPaymentMethodsWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLocalPaymentMethodsWhiteIcon',
  component: PaymentMethodLocalPaymentMethodsWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalPaymentMethodsWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalPaymentMethodsWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
