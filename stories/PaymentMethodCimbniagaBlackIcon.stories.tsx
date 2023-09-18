import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCimbniagaBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCimbniagaBlackIcon',
  component: PaymentMethodCimbniagaBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCimbniagaBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCimbniagaBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
