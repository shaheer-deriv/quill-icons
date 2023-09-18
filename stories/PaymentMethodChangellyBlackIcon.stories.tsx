import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodChangellyBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodChangellyBlackIcon',
  component: PaymentMethodChangellyBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodChangellyBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodChangellyBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
