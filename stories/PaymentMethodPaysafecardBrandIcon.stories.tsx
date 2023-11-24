import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodPaysafecardBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodPaysafecardBrandIcon',
  component: PaymentMethodPaysafecardBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodPaysafecardBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodPaysafecardBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
