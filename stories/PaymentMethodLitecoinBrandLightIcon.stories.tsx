import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodLitecoinBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodLitecoinBrandLightIcon',
  component: PaymentMethodLitecoinBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodLitecoinBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodLitecoinBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
