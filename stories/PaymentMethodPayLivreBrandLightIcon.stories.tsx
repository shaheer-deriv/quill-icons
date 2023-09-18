import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayLivreBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayLivreBrandLightIcon',
  component: PaymentMethodPayLivreBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayLivreBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayLivreBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
