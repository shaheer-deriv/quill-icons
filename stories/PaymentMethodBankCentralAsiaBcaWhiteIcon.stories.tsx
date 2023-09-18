import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankCentralAsiaBcaWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankCentralAsiaBcaWhiteIcon',
  component: PaymentMethodBankCentralAsiaBcaWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankCentralAsiaBcaWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankCentralAsiaBcaWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
