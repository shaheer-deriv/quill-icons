import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInstantBankTransferBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInstantBankTransferBrandDarkIcon',
  component: PaymentMethodInstantBankTransferBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInstantBankTransferBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInstantBankTransferBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
