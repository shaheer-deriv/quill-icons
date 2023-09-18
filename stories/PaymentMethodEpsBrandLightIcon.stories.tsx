import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEpsBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEpsBrandLightIcon',
  component: PaymentMethodEpsBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEpsBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEpsBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
