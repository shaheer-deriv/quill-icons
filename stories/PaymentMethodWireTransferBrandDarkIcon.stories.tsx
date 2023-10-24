import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWireTransferBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWireTransferBrandDarkIcon',
  component: PaymentMethodWireTransferBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWireTransferBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWireTransferBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
