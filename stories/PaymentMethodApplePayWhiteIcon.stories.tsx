import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodApplePayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodApplePayWhiteIcon',
  component: PaymentMethodApplePayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodApplePayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodApplePayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
