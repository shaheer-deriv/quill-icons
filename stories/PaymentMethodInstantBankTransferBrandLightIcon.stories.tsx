import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodInstantBankTransferBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodInstantBankTransferBrandLightIcon',
  component: PaymentMethodInstantBankTransferBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodInstantBankTransferBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodInstantBankTransferBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
