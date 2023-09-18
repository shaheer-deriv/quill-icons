import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOxxoBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOxxoBlackIcon',
  component: PaymentMethodOxxoBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOxxoBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOxxoBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
