import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBoletoBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBoletoBrandIcon',
  component: PaymentMethodBoletoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBoletoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBoletoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
