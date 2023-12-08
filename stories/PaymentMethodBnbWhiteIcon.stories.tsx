import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBnbWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBnbWhiteIcon',
  component: PaymentMethodBnbWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBnbWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBnbWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
