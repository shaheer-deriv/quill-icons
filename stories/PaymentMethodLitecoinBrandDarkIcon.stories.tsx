import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLitecoinBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLitecoinBrandDarkIcon',
  component: PaymentMethodLitecoinBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLitecoinBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLitecoinBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
