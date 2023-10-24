import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWireTransferBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWireTransferBlackIcon',
  component: PaymentMethodWireTransferBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWireTransferBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWireTransferBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
