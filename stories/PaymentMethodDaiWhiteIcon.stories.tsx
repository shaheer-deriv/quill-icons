import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDaiWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDaiWhiteIcon',
  component: PaymentMethodDaiWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDaiWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDaiWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
