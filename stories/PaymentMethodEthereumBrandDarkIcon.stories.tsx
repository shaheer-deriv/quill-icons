import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEthereumBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEthereumBrandDarkIcon',
  component: PaymentMethodEthereumBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEthereumBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEthereumBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
