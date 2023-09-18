import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDaiBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDaiBlackIcon',
  component: PaymentMethodDaiBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDaiBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDaiBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
