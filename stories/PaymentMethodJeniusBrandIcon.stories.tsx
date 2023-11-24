import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJeniusBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJeniusBrandIcon',
  component: PaymentMethodJeniusBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJeniusBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJeniusBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
