import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFpsBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFpsBrandLightIcon',
  component: PaymentMethodFpsBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFpsBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFpsBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
