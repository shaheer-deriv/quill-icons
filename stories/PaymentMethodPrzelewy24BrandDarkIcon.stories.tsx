import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPrzelewy24BrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPrzelewy24BrandDarkIcon',
  component: PaymentMethodPrzelewy24BrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPrzelewy24BrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPrzelewy24BrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
