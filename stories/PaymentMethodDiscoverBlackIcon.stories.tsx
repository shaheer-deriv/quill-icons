import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiscoverBlackIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodDiscoverBlackIcon',
  component: PaymentMethodDiscoverBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiscoverBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiscoverBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
