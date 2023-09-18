import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelMtnBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtelMtnBrandLightIcon',
  component: PaymentMethodAirtelMtnBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelMtnBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelMtnBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
