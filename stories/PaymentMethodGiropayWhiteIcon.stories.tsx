import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGiropayWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGiropayWhiteIcon',
  component: PaymentMethodGiropayWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGiropayWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGiropayWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
