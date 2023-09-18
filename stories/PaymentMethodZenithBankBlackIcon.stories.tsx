import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZenithBankBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZenithBankBlackIcon',
  component: PaymentMethodZenithBankBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZenithBankBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZenithBankBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
