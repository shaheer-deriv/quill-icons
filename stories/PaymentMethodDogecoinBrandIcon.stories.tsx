import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDogecoinBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDogecoinBrandIcon',
  component: PaymentMethodDogecoinBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDogecoinBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDogecoinBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
