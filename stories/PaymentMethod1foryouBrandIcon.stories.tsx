import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1foryouBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod1foryouBrandIcon',
  component: PaymentMethod1foryouBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1foryouBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1foryouBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
