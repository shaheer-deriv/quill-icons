import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankCentralAsiaBcaBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankCentralAsiaBcaBrandIcon',
  component: PaymentMethodBankCentralAsiaBcaBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankCentralAsiaBcaBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankCentralAsiaBcaBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
