import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAirtmBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAirtmBrandDarkIcon',
  component: PaymentMethodAirtmBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAirtmBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAirtmBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
