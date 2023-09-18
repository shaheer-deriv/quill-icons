import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSticpayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSticpayBrandDarkIcon',
  component: PaymentMethodSticpayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSticpayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSticpayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
