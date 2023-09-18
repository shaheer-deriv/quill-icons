import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodRapidTransferBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodRapidTransferBlackIcon',
  component: PaymentMethodRapidTransferBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodRapidTransferBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodRapidTransferBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
