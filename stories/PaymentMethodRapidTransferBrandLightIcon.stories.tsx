import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodRapidTransferBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodRapidTransferBrandLightIcon',
  component: PaymentMethodRapidTransferBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodRapidTransferBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodRapidTransferBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
