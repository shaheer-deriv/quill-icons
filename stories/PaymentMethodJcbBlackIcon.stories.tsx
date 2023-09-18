import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJcbBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJcbBlackIcon',
  component: PaymentMethodJcbBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJcbBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJcbBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
