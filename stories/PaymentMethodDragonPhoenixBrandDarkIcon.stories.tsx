import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonPhoenixBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonPhoenixBrandDarkIcon',
  component: PaymentMethodDragonPhoenixBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonPhoenixBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonPhoenixBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
