import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalBankTransferWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodLocalBankTransferWhiteIcon',
  component: PaymentMethodLocalBankTransferWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalBankTransferWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalBankTransferWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
