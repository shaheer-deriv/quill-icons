import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDragonPhoenixWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDragonPhoenixWhiteIcon',
  component: PaymentMethodDragonPhoenixWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDragonPhoenixWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDragonPhoenixWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
