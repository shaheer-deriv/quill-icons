import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTrustyBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTrustyBlackIcon',
  component: PaymentMethodTrustyBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTrustyBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTrustyBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
