import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFirstBankBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFirstBankBlackIcon',
  component: PaymentMethodFirstBankBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFirstBankBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFirstBankBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
