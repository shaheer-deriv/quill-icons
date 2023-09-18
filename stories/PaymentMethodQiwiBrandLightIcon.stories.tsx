import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodQiwiBrandLightIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodQiwiBrandLightIcon',
  component: PaymentMethodQiwiBrandLightIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodQiwiBrandLightIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodQiwiBrandLightIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
