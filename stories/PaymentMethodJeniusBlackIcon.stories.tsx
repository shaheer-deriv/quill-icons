import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodJeniusBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodJeniusBlackIcon',
  component: PaymentMethodJeniusBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodJeniusBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodJeniusBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
