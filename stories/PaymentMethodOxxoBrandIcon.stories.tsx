import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOxxoBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOxxoBrandIcon',
  component: PaymentMethodOxxoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOxxoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOxxoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
