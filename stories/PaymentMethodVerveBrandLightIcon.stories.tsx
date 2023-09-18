import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVerveBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVerveBrandLightIcon',
  component: PaymentMethodVerveBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVerveBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVerveBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
