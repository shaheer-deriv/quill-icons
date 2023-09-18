import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalPaymentMethodsBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLocalPaymentMethodsBlackIcon',
  component: PaymentMethodLocalPaymentMethodsBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalPaymentMethodsBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalPaymentMethodsBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
