import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaysafecardBlackIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaysafecardBlackIcon',
  component: PaymentMethodPaysafecardBlackIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaysafecardBlackIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaysafecardBlackIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
