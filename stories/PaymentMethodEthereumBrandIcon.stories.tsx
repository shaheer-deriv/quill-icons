import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEthereumBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEthereumBrandIcon',
  component: PaymentMethodEthereumBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEthereumBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEthereumBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
