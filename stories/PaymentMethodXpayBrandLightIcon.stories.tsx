import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXpayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXpayBrandLightIcon',
  component: PaymentMethodXpayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXpayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXpayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
