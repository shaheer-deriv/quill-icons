import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEthereumBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEthereumBrandLightIcon',
  component: PaymentMethodEthereumBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEthereumBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEthereumBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
