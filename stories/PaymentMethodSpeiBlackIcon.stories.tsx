import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSpeiBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSpeiBlackIcon',
  component: PaymentMethodSpeiBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSpeiBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSpeiBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
