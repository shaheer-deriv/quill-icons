import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelMtnBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtelMtnBrandDarkIcon',
  component: PaymentMethodAirtelMtnBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelMtnBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelMtnBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
