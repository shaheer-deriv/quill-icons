import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalPaymentMethodsBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLocalPaymentMethodsBrandDarkIcon',
  component: PaymentMethodLocalPaymentMethodsBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalPaymentMethodsBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalPaymentMethodsBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
