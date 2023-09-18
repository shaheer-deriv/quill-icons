import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAlipayBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAlipayBrandLightIcon',
  component: PaymentMethodAlipayBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAlipayBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAlipayBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
