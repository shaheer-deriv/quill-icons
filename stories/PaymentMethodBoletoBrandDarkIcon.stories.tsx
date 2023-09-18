import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBoletoBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBoletoBrandDarkIcon',
  component: PaymentMethodBoletoBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBoletoBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBoletoBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
