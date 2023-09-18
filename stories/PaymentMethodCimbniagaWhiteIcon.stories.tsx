import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCimbniagaWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCimbniagaWhiteIcon',
  component: PaymentMethodCimbniagaWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCimbniagaWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCimbniagaWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
