import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonPhoenixBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonPhoenixBrandLightIcon',
  component: PaymentMethodDragonPhoenixBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonPhoenixBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonPhoenixBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
