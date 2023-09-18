import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSpeiBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSpeiBrandLightIcon',
  component: PaymentMethodSpeiBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSpeiBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSpeiBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
