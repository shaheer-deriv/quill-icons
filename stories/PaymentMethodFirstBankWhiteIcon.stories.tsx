import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFirstBankWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFirstBankWhiteIcon',
  component: PaymentMethodFirstBankWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFirstBankWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFirstBankWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
