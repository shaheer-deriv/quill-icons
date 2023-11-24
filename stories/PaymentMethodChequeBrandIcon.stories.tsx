import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChequeBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChequeBrandIcon',
  component: PaymentMethodChequeBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChequeBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChequeBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
