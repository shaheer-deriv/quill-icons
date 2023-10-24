import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFpsBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFpsBlackIcon',
  component: PaymentMethodFpsBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFpsBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFpsBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
