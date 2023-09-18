import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZingpayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZingpayBrandLightIcon',
  component: PaymentMethodZingpayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZingpayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZingpayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
