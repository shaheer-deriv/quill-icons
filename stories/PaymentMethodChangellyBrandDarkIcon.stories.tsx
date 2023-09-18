import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChangellyBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChangellyBrandDarkIcon',
  component: PaymentMethodChangellyBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChangellyBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChangellyBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
