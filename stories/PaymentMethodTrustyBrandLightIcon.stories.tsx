import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTrustyBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTrustyBrandLightIcon',
  component: PaymentMethodTrustyBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTrustyBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTrustyBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
