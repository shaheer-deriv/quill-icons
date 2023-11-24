import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAdvcashBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAdvcashBrandIcon',
  component: PaymentMethodAdvcashBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAdvcashBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAdvcashBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
