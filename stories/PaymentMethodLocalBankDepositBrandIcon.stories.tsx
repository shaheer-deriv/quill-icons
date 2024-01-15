import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalBankDepositBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodLocalBankDepositBrandIcon',
  component: PaymentMethodLocalBankDepositBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalBankDepositBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalBankDepositBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
