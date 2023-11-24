import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGiropayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGiropayBrandIcon',
  component: PaymentMethodGiropayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGiropayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGiropayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
