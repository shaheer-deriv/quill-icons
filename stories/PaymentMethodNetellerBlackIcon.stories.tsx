import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodNetellerBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodNetellerBlackIcon',
  component: PaymentMethodNetellerBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodNetellerBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodNetellerBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
