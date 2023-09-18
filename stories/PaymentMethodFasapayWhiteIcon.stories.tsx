import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFasapayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFasapayWhiteIcon',
  component: PaymentMethodFasapayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFasapayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFasapayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
