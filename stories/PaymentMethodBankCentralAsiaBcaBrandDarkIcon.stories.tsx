import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankCentralAsiaBcaBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankCentralAsiaBcaBrandDarkIcon',
  component: PaymentMethodBankCentralAsiaBcaBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankCentralAsiaBcaBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankCentralAsiaBcaBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
