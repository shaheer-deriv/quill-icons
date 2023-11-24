import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBeyonicBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBeyonicBrandIcon',
  component: PaymentMethodBeyonicBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBeyonicBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBeyonicBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
