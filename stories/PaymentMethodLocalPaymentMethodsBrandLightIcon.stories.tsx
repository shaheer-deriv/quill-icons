import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalPaymentMethodsBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLocalPaymentMethodsBrandLightIcon',
  component: PaymentMethodLocalPaymentMethodsBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalPaymentMethodsBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalPaymentMethodsBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
