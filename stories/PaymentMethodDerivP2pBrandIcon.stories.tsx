import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivP2pBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivP2pBrandIcon',
  component: PaymentMethodDerivP2pBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivP2pBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivP2pBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
