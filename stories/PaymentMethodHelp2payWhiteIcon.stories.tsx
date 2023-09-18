import type { Meta, StoryObj } from '@storybook/react';

import { PaymentMethodHelp2payWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/PaymentMethodHelp2payWhiteIcon',
  component: PaymentMethodHelp2payWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PaymentMethodHelp2payWhiteIcon>;

export default meta;

type Story = StoryObj<typeof PaymentMethodHelp2payWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
