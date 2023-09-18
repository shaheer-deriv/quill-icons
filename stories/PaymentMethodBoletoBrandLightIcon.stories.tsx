import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodBoletoBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodBoletoBrandLightIcon',
  component: PaymentMethodBoletoBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodBoletoBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodBoletoBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
