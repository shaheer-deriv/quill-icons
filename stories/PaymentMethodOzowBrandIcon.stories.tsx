import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOzowBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOzowBrandIcon',
  component: PaymentMethodOzowBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOzowBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOzowBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
