import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOzowWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOzowWhiteIcon',
  component: PaymentMethodOzowWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOzowWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOzowWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
