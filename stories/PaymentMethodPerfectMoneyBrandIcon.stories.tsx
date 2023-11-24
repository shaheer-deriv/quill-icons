import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPerfectMoneyBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPerfectMoneyBrandIcon',
  component: PaymentMethodPerfectMoneyBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPerfectMoneyBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPerfectMoneyBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
