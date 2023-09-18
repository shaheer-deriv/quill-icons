import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVisaBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVisaBrandLightIcon',
  component: PaymentMethodVisaBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVisaBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVisaBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
