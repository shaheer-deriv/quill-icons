import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBitcoinBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBitcoinBrandLightIcon',
  component: PaymentMethodBitcoinBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBitcoinBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBitcoinBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
