import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodRapidTransferBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodRapidTransferBrandIcon',
  component: PaymentMethodRapidTransferBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodRapidTransferBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodRapidTransferBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
