import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPrzelewy24BrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPrzelewy24BrandLightIcon',
  component: PaymentMethodPrzelewy24BrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPrzelewy24BrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPrzelewy24BrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
