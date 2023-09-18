import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDerivP2pWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDerivP2pWhiteIcon',
  component: PaymentMethodDerivP2pWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDerivP2pWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDerivP2pWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
