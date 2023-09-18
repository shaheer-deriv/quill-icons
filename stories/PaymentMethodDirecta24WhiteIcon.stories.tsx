import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDirecta24WhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodDirecta24WhiteIcon',
  component: PaymentMethodDirecta24WhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDirecta24WhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDirecta24WhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
