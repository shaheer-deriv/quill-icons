import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodHelp2payBrandIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodHelp2payBrandIcon',
  component: PaymentMethodHelp2payBrandIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodHelp2payBrandIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodHelp2payBrandIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
