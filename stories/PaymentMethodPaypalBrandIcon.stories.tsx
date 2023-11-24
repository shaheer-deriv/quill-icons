import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaypalBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaypalBrandIcon',
  component: PaymentMethodPaypalBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaypalBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaypalBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
