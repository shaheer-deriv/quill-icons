import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChangellyBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChangellyBrandLightIcon',
  component: PaymentMethodChangellyBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChangellyBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChangellyBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
