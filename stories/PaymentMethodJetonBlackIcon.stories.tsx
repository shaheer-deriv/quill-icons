import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJetonBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJetonBlackIcon',
  component: PaymentMethodJetonBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJetonBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJetonBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
