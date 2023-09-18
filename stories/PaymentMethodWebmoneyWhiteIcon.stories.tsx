import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWebmoneyWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWebmoneyWhiteIcon',
  component: PaymentMethodWebmoneyWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWebmoneyWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWebmoneyWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
