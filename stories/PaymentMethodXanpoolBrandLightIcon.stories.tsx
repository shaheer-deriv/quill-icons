import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXanpoolBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXanpoolBrandLightIcon',
  component: PaymentMethodXanpoolBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXanpoolBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXanpoolBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
