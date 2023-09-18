import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPrzelewy24BlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPrzelewy24BlackIcon',
  component: PaymentMethodPrzelewy24BlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPrzelewy24BlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPrzelewy24BlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
