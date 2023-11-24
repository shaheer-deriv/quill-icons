import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrillBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrillBrandIcon',
  component: PaymentMethodSkrillBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrillBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrillBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
