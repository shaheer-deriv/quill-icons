import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrill1TapBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrill1TapBrandIcon',
  component: PaymentMethodSkrill1TapBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrill1TapBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrill1TapBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
