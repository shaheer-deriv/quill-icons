import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEthereumBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEthereumBlackIcon',
  component: PaymentMethodEthereumBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEthereumBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEthereumBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
