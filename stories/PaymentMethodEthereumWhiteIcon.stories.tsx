import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEthereumWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEthereumWhiteIcon',
  component: PaymentMethodEthereumWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEthereumWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEthereumWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
