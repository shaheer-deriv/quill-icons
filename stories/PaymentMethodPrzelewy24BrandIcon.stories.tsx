import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPrzelewy24BrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPrzelewy24BrandIcon',
  component: PaymentMethodPrzelewy24BrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPrzelewy24BrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPrzelewy24BrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
