import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPostepayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPostepayWhiteIcon',
  component: PaymentMethodPostepayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPostepayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPostepayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
