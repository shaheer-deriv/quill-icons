import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodZenithBankWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodZenithBankWhiteIcon',
  component: PaymentMethodZenithBankWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodZenithBankWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodZenithBankWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
