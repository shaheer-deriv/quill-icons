import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodRapidTransferBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodRapidTransferBrandDarkIcon',
  component: PaymentMethodRapidTransferBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodRapidTransferBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodRapidTransferBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
