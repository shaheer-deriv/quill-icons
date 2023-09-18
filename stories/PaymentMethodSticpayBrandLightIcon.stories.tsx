import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSticpayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSticpayBrandLightIcon',
  component: PaymentMethodSticpayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSticpayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSticpayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
