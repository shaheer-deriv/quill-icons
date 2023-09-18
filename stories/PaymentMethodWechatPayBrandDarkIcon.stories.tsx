import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWechatPayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWechatPayBrandDarkIcon',
  component: PaymentMethodWechatPayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWechatPayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWechatPayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
