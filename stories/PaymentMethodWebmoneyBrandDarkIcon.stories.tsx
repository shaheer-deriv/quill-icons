import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodWebmoneyBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodWebmoneyBrandDarkIcon',
  component: PaymentMethodWebmoneyBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodWebmoneyBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodWebmoneyBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
