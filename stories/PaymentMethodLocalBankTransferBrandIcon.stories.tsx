import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalBankTransferBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodLocalBankTransferBrandIcon',
  component: PaymentMethodLocalBankTransferBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalBankTransferBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalBankTransferBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
