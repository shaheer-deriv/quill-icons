import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiscoverBrandIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodDiscoverBrandIcon',
  component: PaymentMethodDiscoverBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiscoverBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiscoverBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
