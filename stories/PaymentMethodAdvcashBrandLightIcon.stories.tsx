import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodAdvcashBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodAdvcashBrandLightIcon',
  component: PaymentMethodAdvcashBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodAdvcashBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodAdvcashBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
