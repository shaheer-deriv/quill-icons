import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBankCentralAsiaBcaBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBankCentralAsiaBcaBrandLightIcon',
  component: PaymentMethodBankCentralAsiaBcaBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBankCentralAsiaBcaBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBankCentralAsiaBcaBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
