import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFirstBankBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFirstBankBrandIcon',
  component: PaymentMethodFirstBankBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFirstBankBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFirstBankBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
