import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWyreBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWyreBrandLightIcon',
  component: PaymentMethodWyreBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWyreBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWyreBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
