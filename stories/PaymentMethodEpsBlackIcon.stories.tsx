import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodEpsBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodEpsBlackIcon',
  component: PaymentMethodEpsBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodEpsBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodEpsBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
