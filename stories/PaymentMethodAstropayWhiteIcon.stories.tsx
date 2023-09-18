import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAstropayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAstropayWhiteIcon',
  component: PaymentMethodAstropayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAstropayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAstropayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
