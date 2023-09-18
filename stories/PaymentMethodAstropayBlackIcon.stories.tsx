import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAstropayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAstropayBlackIcon',
  component: PaymentMethodAstropayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAstropayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAstropayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
