import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodQiwiWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodQiwiWhiteIcon',
  component: PaymentMethodQiwiWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodQiwiWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodQiwiWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
