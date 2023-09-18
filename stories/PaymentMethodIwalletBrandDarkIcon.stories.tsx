import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIwalletBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIwalletBrandDarkIcon',
  component: PaymentMethodIwalletBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIwalletBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIwalletBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
