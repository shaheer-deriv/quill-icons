import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCimbniagaBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCimbniagaBrandLightIcon',
  component: PaymentMethodCimbniagaBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCimbniagaBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCimbniagaBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
