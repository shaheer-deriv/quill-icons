import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodTrustyBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodTrustyBrandDarkIcon',
  component: PaymentMethodTrustyBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodTrustyBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodTrustyBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
