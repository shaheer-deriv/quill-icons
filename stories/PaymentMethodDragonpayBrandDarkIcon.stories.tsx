import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonpayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonpayBrandDarkIcon',
  component: PaymentMethodDragonpayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonpayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonpayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
