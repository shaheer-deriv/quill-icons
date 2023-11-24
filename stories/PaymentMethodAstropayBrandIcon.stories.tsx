import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAstropayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAstropayBrandIcon',
  component: PaymentMethodAstropayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAstropayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAstropayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
