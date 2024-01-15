import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodDiscoverWhiteIcon } from '../src/react/PaymentMethods';

const meta = {
  title: 'Logo/PaymentMethodDiscoverWhiteIcon',
  component: PaymentMethodDiscoverWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodDiscoverWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodDiscoverWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
