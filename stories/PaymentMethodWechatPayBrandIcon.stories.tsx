import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWechatPayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWechatPayBrandIcon',
  component: PaymentMethodWechatPayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWechatPayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWechatPayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
