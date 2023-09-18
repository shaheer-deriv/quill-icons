import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChangellyWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChangellyWhiteIcon',
  component: PaymentMethodChangellyWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChangellyWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChangellyWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
