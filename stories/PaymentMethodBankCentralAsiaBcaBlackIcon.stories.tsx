import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankCentralAsiaBcaBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankCentralAsiaBcaBlackIcon',
  component: PaymentMethodBankCentralAsiaBcaBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankCentralAsiaBcaBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankCentralAsiaBcaBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
