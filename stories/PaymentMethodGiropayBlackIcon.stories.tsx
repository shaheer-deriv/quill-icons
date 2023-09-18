import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodGiropayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodGiropayBlackIcon',
  component: PaymentMethodGiropayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodGiropayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodGiropayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
