import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJcbBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJcbBrandIcon',
  component: PaymentMethodJcbBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJcbBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJcbBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
