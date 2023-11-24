import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPixBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPixBrandIcon',
  component: PaymentMethodPixBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPixBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPixBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
