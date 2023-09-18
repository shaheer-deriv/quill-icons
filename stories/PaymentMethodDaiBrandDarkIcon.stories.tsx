import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDaiBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDaiBrandDarkIcon',
  component: PaymentMethodDaiBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDaiBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDaiBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
