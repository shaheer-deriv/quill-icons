import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAlipayBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAlipayBrandDarkIcon',
  component: PaymentMethodAlipayBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAlipayBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAlipayBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
