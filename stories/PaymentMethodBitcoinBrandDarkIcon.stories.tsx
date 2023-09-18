import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinBrandDarkIcon',
  component: PaymentMethodBitcoinBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
