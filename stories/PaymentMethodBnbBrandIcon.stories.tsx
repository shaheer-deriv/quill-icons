import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBnbBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBnbBrandIcon',
  component: PaymentMethodBnbBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBnbBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBnbBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
