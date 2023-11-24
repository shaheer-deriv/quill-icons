import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodOzowBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodOzowBlackIcon',
  component: PaymentMethodOzowBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodOzowBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodOzowBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
