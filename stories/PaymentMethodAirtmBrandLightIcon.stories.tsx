import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtmBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtmBrandLightIcon',
  component: PaymentMethodAirtmBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtmBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtmBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
