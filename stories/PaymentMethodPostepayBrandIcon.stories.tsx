import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPostepayBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPostepayBrandIcon',
  component: PaymentMethodPostepayBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPostepayBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPostepayBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
