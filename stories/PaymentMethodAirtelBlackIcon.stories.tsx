import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtelBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodAirtelBlackIcon',
  component: PaymentMethodAirtelBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtelBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtelBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
