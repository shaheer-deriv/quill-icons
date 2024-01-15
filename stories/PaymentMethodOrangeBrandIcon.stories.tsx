import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOrangeBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodOrangeBrandIcon',
  component: PaymentMethodOrangeBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOrangeBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOrangeBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
