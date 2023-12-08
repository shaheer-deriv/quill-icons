import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodCardanoBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodCardanoBrandIcon',
  component: PaymentMethodCardanoBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodCardanoBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodCardanoBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
