import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodRapidTransferWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodRapidTransferWhiteIcon',
  component: PaymentMethodRapidTransferWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodRapidTransferWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodRapidTransferWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
