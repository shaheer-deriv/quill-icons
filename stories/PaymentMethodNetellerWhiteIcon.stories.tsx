import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNetellerWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNetellerWhiteIcon',
  component: PaymentMethodNetellerWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNetellerWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNetellerWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
