import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPayLivreBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPayLivreBrandDarkIcon',
  component: PaymentMethodPayLivreBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPayLivreBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPayLivreBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
