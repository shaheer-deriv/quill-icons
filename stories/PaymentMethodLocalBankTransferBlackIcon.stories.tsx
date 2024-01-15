import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLocalBankTransferBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodLocalBankTransferBlackIcon',
  component: PaymentMethodLocalBankTransferBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLocalBankTransferBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLocalBankTransferBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
