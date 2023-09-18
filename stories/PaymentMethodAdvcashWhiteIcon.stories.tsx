import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAdvcashWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAdvcashWhiteIcon',
  component: PaymentMethodAdvcashWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAdvcashWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAdvcashWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
