import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPerfectMoneyWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPerfectMoneyWhiteIcon',
  component: PaymentMethodPerfectMoneyWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPerfectMoneyWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPerfectMoneyWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
