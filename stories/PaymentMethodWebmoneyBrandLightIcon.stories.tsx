import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWebmoneyBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWebmoneyBrandLightIcon',
  component: PaymentMethodWebmoneyBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWebmoneyBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWebmoneyBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
