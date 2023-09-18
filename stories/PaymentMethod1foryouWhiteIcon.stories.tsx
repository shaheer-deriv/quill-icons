import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethod1foryouWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethod1foryouWhiteIcon',
  component: PaymentMethod1foryouWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethod1foryouWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethod1foryouWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
