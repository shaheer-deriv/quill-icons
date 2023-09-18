import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodXanpoolBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodXanpoolBlackIcon',
  component: PaymentMethodXanpoolBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodXanpoolBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodXanpoolBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
