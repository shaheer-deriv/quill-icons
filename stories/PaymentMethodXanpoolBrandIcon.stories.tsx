import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXanpoolBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXanpoolBrandIcon',
  component: PaymentMethodXanpoolBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXanpoolBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXanpoolBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
