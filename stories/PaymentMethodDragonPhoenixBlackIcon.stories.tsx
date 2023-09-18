import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonPhoenixBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonPhoenixBlackIcon',
  component: PaymentMethodDragonPhoenixBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonPhoenixBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonPhoenixBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
