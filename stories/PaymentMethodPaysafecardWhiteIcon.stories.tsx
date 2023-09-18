import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaysafecardWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaysafecardWhiteIcon',
  component: PaymentMethodPaysafecardWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaysafecardWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaysafecardWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
