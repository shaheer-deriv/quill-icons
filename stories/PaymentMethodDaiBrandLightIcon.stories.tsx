import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDaiBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDaiBrandLightIcon',
  component: PaymentMethodDaiBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDaiBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDaiBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
