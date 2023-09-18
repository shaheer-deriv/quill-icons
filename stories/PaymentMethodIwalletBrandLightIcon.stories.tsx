import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodIwalletBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodIwalletBrandLightIcon',
  component: PaymentMethodIwalletBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodIwalletBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodIwalletBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
