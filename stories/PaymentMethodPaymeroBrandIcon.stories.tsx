import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaymeroBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaymeroBrandIcon',
  component: PaymentMethodPaymeroBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaymeroBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaymeroBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
