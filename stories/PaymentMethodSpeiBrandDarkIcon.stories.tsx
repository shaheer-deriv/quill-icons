import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodSpeiBrandDarkIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodSpeiBrandDarkIcon',
  component: PaymentMethodSpeiBrandDarkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodSpeiBrandDarkIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodSpeiBrandDarkIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
