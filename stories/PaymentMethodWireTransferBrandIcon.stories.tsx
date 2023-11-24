import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWireTransferBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWireTransferBrandIcon',
  component: PaymentMethodWireTransferBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWireTransferBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWireTransferBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
