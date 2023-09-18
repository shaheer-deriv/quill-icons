import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJcbWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJcbWhiteIcon',
  component: PaymentMethodJcbWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJcbWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJcbWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
