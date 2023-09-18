import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSpeiWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSpeiWhiteIcon',
  component: PaymentMethodSpeiWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSpeiWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSpeiWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
