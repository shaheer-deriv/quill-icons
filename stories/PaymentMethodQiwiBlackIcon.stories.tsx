import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodQiwiBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodQiwiBlackIcon',
  component: PaymentMethodQiwiBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodQiwiBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodQiwiBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
