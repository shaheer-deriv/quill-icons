import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWechatPayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWechatPayWhiteIcon',
  component: PaymentMethodWechatPayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWechatPayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWechatPayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
