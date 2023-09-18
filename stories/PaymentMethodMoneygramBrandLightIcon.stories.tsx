import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodMoneygramBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodMoneygramBrandLightIcon',
  component: PaymentMethodMoneygramBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodMoneygramBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodMoneygramBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
