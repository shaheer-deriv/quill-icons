import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPerfectMoneyBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPerfectMoneyBlackIcon',
  component: PaymentMethodPerfectMoneyBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPerfectMoneyBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPerfectMoneyBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
