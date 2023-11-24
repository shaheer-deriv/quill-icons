import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDirecta24BrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDirecta24BrandIcon',
  component: PaymentMethodDirecta24BrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDirecta24BrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDirecta24BrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
