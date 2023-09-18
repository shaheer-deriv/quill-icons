import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodHelp2payBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodHelp2payBlackIcon',
  component: PaymentMethodHelp2payBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodHelp2payBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodHelp2payBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
