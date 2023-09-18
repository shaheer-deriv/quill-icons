import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrillBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrillBrandDarkIcon',
  component: PaymentMethodSkrillBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrillBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrillBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
