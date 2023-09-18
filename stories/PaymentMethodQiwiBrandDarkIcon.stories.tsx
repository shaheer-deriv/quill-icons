import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodQiwiBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodQiwiBrandDarkIcon',
  component: PaymentMethodQiwiBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodQiwiBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodQiwiBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
