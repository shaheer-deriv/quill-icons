import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodVerveWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodVerveWhiteIcon',
  component: PaymentMethodVerveWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodVerveWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodVerveWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
