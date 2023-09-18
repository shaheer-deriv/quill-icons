import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJcbBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJcbBrandLightIcon',
  component: PaymentMethodJcbBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJcbBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJcbBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
