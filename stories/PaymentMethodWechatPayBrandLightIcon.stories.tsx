import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWechatPayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWechatPayBrandLightIcon',
  component: PaymentMethodWechatPayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWechatPayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWechatPayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
