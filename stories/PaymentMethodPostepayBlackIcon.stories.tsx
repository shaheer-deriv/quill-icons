import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPostepayBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPostepayBlackIcon',
  component: PaymentMethodPostepayBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPostepayBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPostepayBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
