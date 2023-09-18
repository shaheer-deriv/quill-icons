import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSkrillBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSkrillBrandLightIcon',
  component: PaymentMethodSkrillBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSkrillBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSkrillBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
