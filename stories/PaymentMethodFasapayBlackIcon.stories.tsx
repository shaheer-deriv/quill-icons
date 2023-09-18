import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFasapayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFasapayBlackIcon',
  component: PaymentMethodFasapayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFasapayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFasapayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
