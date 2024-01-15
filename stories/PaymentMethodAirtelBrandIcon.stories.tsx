import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodAirtelBrandIcon',
  component: PaymentMethodAirtelBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
