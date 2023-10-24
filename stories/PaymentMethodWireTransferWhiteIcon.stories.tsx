import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWireTransferWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWireTransferWhiteIcon',
  component: PaymentMethodWireTransferWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWireTransferWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWireTransferWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
