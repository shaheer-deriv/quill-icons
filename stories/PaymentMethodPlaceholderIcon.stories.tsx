import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPlaceholderIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPlaceholderIcon',
  component: PaymentMethodPlaceholderIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPlaceholderIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPlaceholderIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
