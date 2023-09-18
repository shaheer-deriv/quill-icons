import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZingpayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZingpayBrandDarkIcon',
  component: PaymentMethodZingpayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZingpayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZingpayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
