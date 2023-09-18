import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTrustyWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTrustyWhiteIcon',
  component: PaymentMethodTrustyWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTrustyWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTrustyWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
