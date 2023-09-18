import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonpayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonpayBrandLightIcon',
  component: PaymentMethodDragonpayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonpayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonpayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
