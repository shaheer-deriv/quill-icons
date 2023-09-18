import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivP2pBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivP2pBlackIcon',
  component: PaymentMethodDerivP2pBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivP2pBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivP2pBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
