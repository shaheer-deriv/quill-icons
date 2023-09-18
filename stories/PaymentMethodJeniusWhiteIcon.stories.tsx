import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJeniusWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJeniusWhiteIcon',
  component: PaymentMethodJeniusWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJeniusWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJeniusWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
