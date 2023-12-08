import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDogecoinBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDogecoinBlackIcon',
  component: PaymentMethodDogecoinBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDogecoinBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDogecoinBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
