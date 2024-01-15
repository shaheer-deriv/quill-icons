import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTigoBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodTigoBrandIcon',
  component: PaymentMethodTigoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTigoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTigoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
