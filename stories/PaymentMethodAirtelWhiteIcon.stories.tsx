import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodAirtelWhiteIcon',
  component: PaymentMethodAirtelWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
