import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFpsBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFpsBrandDarkIcon',
  component: PaymentMethodFpsBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFpsBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFpsBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
