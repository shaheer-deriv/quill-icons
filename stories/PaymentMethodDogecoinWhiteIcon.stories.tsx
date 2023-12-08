import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDogecoinWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDogecoinWhiteIcon',
  component: PaymentMethodDogecoinWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDogecoinWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDogecoinWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
