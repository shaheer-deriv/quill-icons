import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWechatPayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWechatPayBlackIcon',
  component: PaymentMethodWechatPayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWechatPayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWechatPayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
