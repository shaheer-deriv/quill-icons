import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJetonBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJetonBrandLightIcon',
  component: PaymentMethodJetonBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJetonBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJetonBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
