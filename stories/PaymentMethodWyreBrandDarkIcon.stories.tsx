import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWyreBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWyreBrandDarkIcon',
  component: PaymentMethodWyreBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWyreBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWyreBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
