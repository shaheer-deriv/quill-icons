import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWireTransferBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWireTransferBrandLightIcon',
  component: PaymentMethodWireTransferBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWireTransferBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWireTransferBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
