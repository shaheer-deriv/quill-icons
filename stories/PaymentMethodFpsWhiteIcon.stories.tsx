import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodFpsWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodFpsWhiteIcon',
  component: PaymentMethodFpsWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodFpsWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodFpsWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
