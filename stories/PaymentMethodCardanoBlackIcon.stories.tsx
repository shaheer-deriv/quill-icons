import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCardanoBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCardanoBlackIcon',
  component: PaymentMethodCardanoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCardanoBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCardanoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
