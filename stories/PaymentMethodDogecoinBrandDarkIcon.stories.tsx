import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDogecoinBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDogecoinBrandDarkIcon',
  component: PaymentMethodDogecoinBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDogecoinBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDogecoinBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
