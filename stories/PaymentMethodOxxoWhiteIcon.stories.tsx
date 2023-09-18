import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOxxoWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOxxoWhiteIcon',
  component: PaymentMethodOxxoWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOxxoWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOxxoWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
