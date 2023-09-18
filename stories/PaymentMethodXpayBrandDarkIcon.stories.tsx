import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXpayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXpayBrandDarkIcon',
  component: PaymentMethodXpayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXpayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXpayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
