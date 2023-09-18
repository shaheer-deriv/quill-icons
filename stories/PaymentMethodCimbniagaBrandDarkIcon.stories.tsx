import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCimbniagaBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCimbniagaBrandDarkIcon',
  component: PaymentMethodCimbniagaBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCimbniagaBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCimbniagaBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
