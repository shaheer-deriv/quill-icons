import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPerfectMoneyBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPerfectMoneyBrandLightIcon',
  component: PaymentMethodPerfectMoneyBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPerfectMoneyBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPerfectMoneyBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
