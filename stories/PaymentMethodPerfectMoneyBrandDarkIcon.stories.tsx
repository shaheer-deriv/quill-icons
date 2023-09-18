import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPerfectMoneyBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPerfectMoneyBrandDarkIcon',
  component: PaymentMethodPerfectMoneyBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPerfectMoneyBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPerfectMoneyBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
