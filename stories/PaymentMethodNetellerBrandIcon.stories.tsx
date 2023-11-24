import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNetellerBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNetellerBrandIcon',
  component: PaymentMethodNetellerBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNetellerBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNetellerBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
