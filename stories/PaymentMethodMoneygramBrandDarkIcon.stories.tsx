import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMoneygramBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMoneygramBrandDarkIcon',
  component: PaymentMethodMoneygramBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMoneygramBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMoneygramBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
