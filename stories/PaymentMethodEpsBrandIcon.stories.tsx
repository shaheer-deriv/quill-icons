import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEpsBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEpsBrandIcon',
  component: PaymentMethodEpsBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEpsBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEpsBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
